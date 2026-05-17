import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AppointmentPayload } from '../domain/dto/AppointmentPayload';

@Injectable()
export class AppointmentRepository {
    constructor(private prisma: PrismaService) {}

    public async upsertAppointmentData(data: AppointmentPayload): Promise<void> {
        const patientId = data.Patient.patient_id || data.Patient.id;
        if (!patientId) {
            throw new Error("Missing patient identifier");
        }

        await this.prisma.$transaction(async (tx) => {
            // Upsert Department
            await tx.department.upsert({
                where: { id: data.Department.id },
                update: {
                    name: data.Department.name,
                    language: data.Department.language,
                },
                create: {
                    id: data.Department.id,
                    name: data.Department.name,
                    language: data.Department.language,
                }
            });

            // Upsert Client
            await tx.client.upsert({
                where: { id: data.Client.id },
                update: { 
                    account_number_id: data.Client.account_number_id,
                    name: data.Client.name,
                    primary_phone_number: data.Client.primary_phone_number,
                    is_new_client: data.Client.is_new_client,
                    is_opt_in: data.Client.is_opt_in,
                    is_org: data.Client.is_org,
                    is_phone_selected: data.Client.is_phone_selected,
                    is_locked: data.Client.is_locked,
                    is_guest_account: data.Client.is_guest_account,
                },
                create: { 
                    id: data.Client.id,
                    account_number_id: data.Client.account_number_id,
                    name: data.Client.name,
                    primary_phone_number: data.Client.primary_phone_number,
                    is_new_client: data.Client.is_new_client,
                    is_opt_in: data.Client.is_opt_in,
                    is_org: data.Client.is_org,
                    is_phone_selected: data.Client.is_phone_selected,
                    is_locked: data.Client.is_locked,
                    is_guest_account: data.Client.is_guest_account,
                }
            });

            // Upsert Patient
            await tx.patient.upsert({
                where: { patient_id: patientId },
                update: { 
                    pet_id: data.Patient.pet_id,
                    client_id: data.Client.id,
                    record_number: data.Patient.record_number,
                    pet_name: data.Patient.pet_name,
                    is_new_patient: data.Patient.is_new_patient,
                    has_belongings: data.Patient.has_belongings,
                    breed: data.Patient.breed,
                    species: data.Patient.species,
                    date_of_birth: data.Patient.date_of_birth,
                    profile_image_url: data.Patient.profile_image_url,
                    sex_name: data.Patient.sex_name,
                    sterilization: data.Patient.sterilization,
                    last_weight_kgm: data.Patient.last_weight_kgm,
                    last_weight_lb: data.Patient.last_weight_lb,
                    alert: data.Patient.alert,
                    has_bites_or_scratches: data.Patient.has_bites_or_scratches,
                },
                create: { 
                    patient_id: patientId,
                    pet_id: data.Patient.pet_id,
                    client_id: data.Client.id,
                    record_number: data.Patient.record_number,
                    pet_name: data.Patient.pet_name,
                    is_new_patient: data.Patient.is_new_patient,
                    has_belongings: data.Patient.has_belongings,
                    breed: data.Patient.breed,
                    species: data.Patient.species,
                    date_of_birth: data.Patient.date_of_birth,
                    profile_image_url: data.Patient.profile_image_url,
                    sex_name: data.Patient.sex_name,
                    sterilization: data.Patient.sterilization,
                    last_weight_kgm: data.Patient.last_weight_kgm,
                    last_weight_lb: data.Patient.last_weight_lb,
                    alert: data.Patient.alert,
                    has_bites_or_scratches: data.Patient.has_bites_or_scratches,
                }
            });

            // Upsert AppointmentType
            if (data.AppointmentType) {
                await tx.appointmentType.upsert({
                    where: { id: data.AppointmentType.id },
                    update: { 
                        name: data.AppointmentType.name,
                        color_code: data.AppointmentType.color_code,
                        bu_appointment_type_id: data.AppointmentType.bu_appointment_type_id,
                        sub_type_id: data.AppointmentType.sub_type_id,
                        sub_type_name: data.AppointmentType.sub_type_name,
                        sub_type_duration: data.AppointmentType.sub_type_duration,
                    },
                    create: { 
                        id: data.AppointmentType.id,
                        name: data.AppointmentType.name,
                        color_code: data.AppointmentType.color_code,
                        bu_appointment_type_id: data.AppointmentType.bu_appointment_type_id,
                        sub_type_id: data.AppointmentType.sub_type_id,
                        sub_type_name: data.AppointmentType.sub_type_name,
                        sub_type_duration: data.AppointmentType.sub_type_duration,
                    }
                });
            }

            // Upsert Appointment
            const { Department, Client, Patient, AppointmentType, Reasons, StatusAudit, ...appointmentData } = data;
            
            await tx.appointment.upsert({
                where: { id: appointmentData.id },
                update: {
                    ...appointmentData,
                    department_id: data.Department.id,
                    client_id: data.Client.id,
                    patient_id: patientId,
                    appointment_type_id: data.AppointmentType ? data.AppointmentType.id : null,
                },
                create: {
                    ...appointmentData,
                    department_id: data.Department.id,
                    client_id: data.Client.id,
                    patient_id: patientId,
                    appointment_type_id: data.AppointmentType ? data.AppointmentType.id : null,
                }
            });

            // Handle Reasons
            if (Reasons && Reasons.length > 0) {
                for (const reason of Reasons) {
                    const reasonId = reason.id || reason.reason_id;
                    if (reasonId) {
                        await tx.appointmentReason.upsert({
                            where: {
                                appointment_id_reason_id: {
                                    appointment_id: appointmentData.id,
                                    reason_id: reasonId
                                }
                            },
                            update: { name: reason.name },
                            create: {
                                appointment_id: appointmentData.id,
                                reason_id: reasonId,
                                name: reason.name
                            }
                        });
                    }
                }
            }

            // Handle StatusAudit
            if (StatusAudit && StatusAudit.length > 0) {
                for (const audit of StatusAudit) {
                    await tx.appointmentStatusAudit.create({
                        data: {
                            appointment_id: appointmentData.id,
                            time_stamp: audit.time_stamp,
                            status_changed_to: audit.status_changed_to,
                            changed_by_user_id: audit.changed_by_user_id,
                            application_id: audit.application_id,
                            resource_id: audit.resource_id,
                            resource_name: audit.resource_name,
                            appointment_date_time: audit.appointment_date_time
                        }
                    });
                }
            }
        });
    }


}

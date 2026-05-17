export interface AppointmentPayload {
    id: string;
    ouid?: string;
    resource_guid?: string;
    is_emergency?: boolean;
    appointment_date?: string;
    date_created?: string;
    date_ste?: number;
    created_by?: string;
    created_application_id?: string;
    start_time?: string;
    start_time_ms?: number;
    duration?: number;
    admission_status_id?: string;
    admission_display_name?: string;
    status_id?: number;
    notes?: string;
    is_deleted?: boolean;
    modified_by?: string;
    date_modified?: string;
    is_walkin?: boolean;
    arrival_ts?: string;
    is_confirmed?: boolean;
    is_doctor?: boolean;
    is_real_staff?: boolean;
    payment_due_warning?: boolean;

    Department: {
        id: string;
        name: string;
        language?: string;
    };

    Client: {
        id: string;
        account_number_id?: string;
        name?: string;
        primary_phone_number?: string;
        is_new_client?: boolean;
        is_opt_in?: boolean;
        is_org?: boolean;
        is_phone_selected?: boolean;
        is_locked?: boolean;
        is_guest_account?: boolean;
    };

    Patient: {
        id?: string;
        patient_id?: string;
        pet_id: string;
        record_number?: number;
        pet_name?: string;
        is_new_patient?: boolean;
        has_belongings?: boolean;
        breed?: string;
        species?: string;
        date_of_birth?: string;
        profile_image_url?: string;
        sex_name?: string;
        sterilization?: string;
        last_weight_kgm?: number;
        last_weight_lb?: number;
        alert?: string;
        has_bites_or_scratches?: boolean;
    };

    AppointmentType?: {
        id: string;
        name?: string;
        color_code?: string;
        bu_appointment_type_id?: string;
        sub_type_id?: string;
        sub_type_name?: string;
        sub_type_duration?: number;
    };

    Reasons?: Array<{
        id?: string;
        reason_id?: string;
        name?: string;
    }>;

    StatusAudit?: Array<{
        time_stamp: string;
        status_changed_to?: string;
        changed_by_user_id?: string;
        application_id?: string;
        resource_id?: string;
        resource_name?: string;
        appointment_date_time?: string;
    }>;
}

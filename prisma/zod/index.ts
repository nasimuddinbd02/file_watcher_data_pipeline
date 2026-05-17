import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const DepartmentScalarFieldEnumSchema = z.enum(['id','name','language']);

export const ClientScalarFieldEnumSchema = z.enum(['id','account_number_id','name','primary_phone_number','is_new_client','is_opt_in','is_org','is_phone_selected','is_locked','is_guest_account']);

export const PatientScalarFieldEnumSchema = z.enum(['patient_id','pet_id','client_id','record_number','pet_name','is_new_patient','has_belongings','breed','species','date_of_birth','profile_image_url','sex_name','sterilization','last_weight_kgm','last_weight_lb','alert','has_bites_or_scratches']);

export const AppointmentTypeScalarFieldEnumSchema = z.enum(['id','name','color_code','bu_appointment_type_id','sub_type_id','sub_type_name','sub_type_duration']);

export const AppointmentScalarFieldEnumSchema = z.enum(['id','ouid','resource_guid','department_id','client_id','patient_id','appointment_type_id','is_emergency','appointment_date','date_created','date_ste','created_by','created_application_id','start_time','start_time_ms','duration','admission_status_id','admission_display_name','status_id','notes','is_deleted','modified_by','date_modified','is_walkin','arrival_ts','is_confirmed','is_doctor','is_real_staff','payment_due_warning']);

export const AppointmentReasonScalarFieldEnumSchema = z.enum(['appointment_id','reason_id','name']);

export const AppointmentStatusAuditScalarFieldEnumSchema = z.enum(['id','appointment_id','time_stamp','status_changed_to','changed_by_user_id','application_id','resource_id','resource_name','appointment_date_time']);

export const FileProcessingRecordScalarFieldEnumSchema = z.enum(['id','file_name','process_time','file_size_bytes','total_time_ms','status','error_message']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// DEPARTMENT SCHEMA
/////////////////////////////////////////

export const DepartmentSchema = z.object({
  id: z.string(),
  name: z.string(),
  language: z.string().nullable(),
})

export type Department = z.infer<typeof DepartmentSchema>

/////////////////////////////////////////
// CLIENT SCHEMA
/////////////////////////////////////////

export const ClientSchema = z.object({
  id: z.string(),
  account_number_id: z.string().nullable(),
  name: z.string().nullable(),
  primary_phone_number: z.string().nullable(),
  is_new_client: z.boolean(),
  is_opt_in: z.boolean(),
  is_org: z.boolean(),
  is_phone_selected: z.boolean(),
  is_locked: z.boolean(),
  is_guest_account: z.boolean(),
})

export type Client = z.infer<typeof ClientSchema>

/////////////////////////////////////////
// PATIENT SCHEMA
/////////////////////////////////////////

export const PatientSchema = z.object({
  patient_id: z.string(),
  pet_id: z.string(),
  client_id: z.string().nullable(),
  record_number: z.number().int().nullable(),
  pet_name: z.string().nullable(),
  is_new_patient: z.boolean(),
  has_belongings: z.boolean(),
  breed: z.string().nullable(),
  species: z.string().nullable(),
  date_of_birth: z.string().nullable(),
  profile_image_url: z.string().nullable(),
  sex_name: z.string().nullable(),
  sterilization: z.string().nullable(),
  last_weight_kgm: z.number().nullable(),
  last_weight_lb: z.number().nullable(),
  alert: z.string().nullable(),
  has_bites_or_scratches: z.boolean(),
})

export type Patient = z.infer<typeof PatientSchema>

/////////////////////////////////////////
// APPOINTMENT TYPE SCHEMA
/////////////////////////////////////////

export const AppointmentTypeSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  color_code: z.string().nullable(),
  bu_appointment_type_id: z.string().nullable(),
  sub_type_id: z.string().nullable(),
  sub_type_name: z.string().nullable(),
  sub_type_duration: z.number().int().nullable(),
})

export type AppointmentType = z.infer<typeof AppointmentTypeSchema>

/////////////////////////////////////////
// APPOINTMENT SCHEMA
/////////////////////////////////////////

export const AppointmentSchema = z.object({
  id: z.string(),
  ouid: z.string().nullable(),
  resource_guid: z.string().nullable(),
  department_id: z.string().nullable(),
  client_id: z.string().nullable(),
  patient_id: z.string().nullable(),
  appointment_type_id: z.string().nullable(),
  is_emergency: z.boolean(),
  appointment_date: z.string().nullable(),
  date_created: z.string().nullable(),
  date_ste: z.number().int().nullable(),
  created_by: z.string().nullable(),
  created_application_id: z.string().nullable(),
  start_time: z.string().nullable(),
  start_time_ms: z.number().int().nullable(),
  duration: z.number().int().nullable(),
  admission_status_id: z.string().nullable(),
  admission_display_name: z.string().nullable(),
  status_id: z.number().int().nullable(),
  notes: z.string().nullable(),
  is_deleted: z.boolean(),
  modified_by: z.string().nullable(),
  date_modified: z.string().nullable(),
  is_walkin: z.boolean(),
  arrival_ts: z.string().nullable(),
  is_confirmed: z.boolean(),
  is_doctor: z.boolean(),
  is_real_staff: z.boolean(),
  payment_due_warning: z.boolean(),
})

export type Appointment = z.infer<typeof AppointmentSchema>

/////////////////////////////////////////
// APPOINTMENT REASON SCHEMA
/////////////////////////////////////////

export const AppointmentReasonSchema = z.object({
  appointment_id: z.string(),
  reason_id: z.string(),
  name: z.string().nullable(),
})

export type AppointmentReason = z.infer<typeof AppointmentReasonSchema>

/////////////////////////////////////////
// APPOINTMENT STATUS AUDIT SCHEMA
/////////////////////////////////////////

export const AppointmentStatusAuditSchema = z.object({
  id: z.number().int(),
  appointment_id: z.string(),
  time_stamp: z.string(),
  status_changed_to: z.string().nullable(),
  changed_by_user_id: z.string().nullable(),
  application_id: z.string().nullable(),
  resource_id: z.string().nullable(),
  resource_name: z.string().nullable(),
  appointment_date_time: z.string().nullable(),
})

export type AppointmentStatusAudit = z.infer<typeof AppointmentStatusAuditSchema>

/////////////////////////////////////////
// FILE PROCESSING RECORD SCHEMA
/////////////////////////////////////////

export const FileProcessingRecordSchema = z.object({
  id: z.number().int(),
  file_name: z.string(),
  process_time: z.coerce.date(),
  file_size_bytes: z.number().int(),
  total_time_ms: z.number(),
  status: z.string(),
  error_message: z.string().nullable(),
})

export type FileProcessingRecord = z.infer<typeof FileProcessingRecordSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// DEPARTMENT
//------------------------------------------------------

export const DepartmentIncludeSchema: z.ZodType<Prisma.DepartmentInclude> = z.object({
  Appointments: z.union([z.boolean(),z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DepartmentCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const DepartmentArgsSchema: z.ZodType<Prisma.DepartmentDefaultArgs> = z.object({
  select: z.lazy(() => DepartmentSelectSchema).optional(),
  include: z.lazy(() => DepartmentIncludeSchema).optional(),
}).strict();

export const DepartmentCountOutputTypeArgsSchema: z.ZodType<Prisma.DepartmentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DepartmentCountOutputTypeSelectSchema).nullish(),
}).strict();

export const DepartmentCountOutputTypeSelectSchema: z.ZodType<Prisma.DepartmentCountOutputTypeSelect> = z.object({
  Appointments: z.boolean().optional(),
}).strict();

export const DepartmentSelectSchema: z.ZodType<Prisma.DepartmentSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  language: z.boolean().optional(),
  Appointments: z.union([z.boolean(),z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DepartmentCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CLIENT
//------------------------------------------------------

export const ClientIncludeSchema: z.ZodType<Prisma.ClientInclude> = z.object({
  Patients: z.union([z.boolean(),z.lazy(() => PatientFindManyArgsSchema)]).optional(),
  Appointments: z.union([z.boolean(),z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClientCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const ClientArgsSchema: z.ZodType<Prisma.ClientDefaultArgs> = z.object({
  select: z.lazy(() => ClientSelectSchema).optional(),
  include: z.lazy(() => ClientIncludeSchema).optional(),
}).strict();

export const ClientCountOutputTypeArgsSchema: z.ZodType<Prisma.ClientCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ClientCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ClientCountOutputTypeSelectSchema: z.ZodType<Prisma.ClientCountOutputTypeSelect> = z.object({
  Patients: z.boolean().optional(),
  Appointments: z.boolean().optional(),
}).strict();

export const ClientSelectSchema: z.ZodType<Prisma.ClientSelect> = z.object({
  id: z.boolean().optional(),
  account_number_id: z.boolean().optional(),
  name: z.boolean().optional(),
  primary_phone_number: z.boolean().optional(),
  is_new_client: z.boolean().optional(),
  is_opt_in: z.boolean().optional(),
  is_org: z.boolean().optional(),
  is_phone_selected: z.boolean().optional(),
  is_locked: z.boolean().optional(),
  is_guest_account: z.boolean().optional(),
  Patients: z.union([z.boolean(),z.lazy(() => PatientFindManyArgsSchema)]).optional(),
  Appointments: z.union([z.boolean(),z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClientCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PATIENT
//------------------------------------------------------

export const PatientIncludeSchema: z.ZodType<Prisma.PatientInclude> = z.object({
  Client: z.union([z.boolean(),z.lazy(() => ClientArgsSchema)]).optional(),
  Appointments: z.union([z.boolean(),z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PatientCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const PatientArgsSchema: z.ZodType<Prisma.PatientDefaultArgs> = z.object({
  select: z.lazy(() => PatientSelectSchema).optional(),
  include: z.lazy(() => PatientIncludeSchema).optional(),
}).strict();

export const PatientCountOutputTypeArgsSchema: z.ZodType<Prisma.PatientCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PatientCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PatientCountOutputTypeSelectSchema: z.ZodType<Prisma.PatientCountOutputTypeSelect> = z.object({
  Appointments: z.boolean().optional(),
}).strict();

export const PatientSelectSchema: z.ZodType<Prisma.PatientSelect> = z.object({
  patient_id: z.boolean().optional(),
  pet_id: z.boolean().optional(),
  client_id: z.boolean().optional(),
  record_number: z.boolean().optional(),
  pet_name: z.boolean().optional(),
  is_new_patient: z.boolean().optional(),
  has_belongings: z.boolean().optional(),
  breed: z.boolean().optional(),
  species: z.boolean().optional(),
  date_of_birth: z.boolean().optional(),
  profile_image_url: z.boolean().optional(),
  sex_name: z.boolean().optional(),
  sterilization: z.boolean().optional(),
  last_weight_kgm: z.boolean().optional(),
  last_weight_lb: z.boolean().optional(),
  alert: z.boolean().optional(),
  has_bites_or_scratches: z.boolean().optional(),
  Client: z.union([z.boolean(),z.lazy(() => ClientArgsSchema)]).optional(),
  Appointments: z.union([z.boolean(),z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PatientCountOutputTypeArgsSchema)]).optional(),
}).strict()

// APPOINTMENT TYPE
//------------------------------------------------------

export const AppointmentTypeIncludeSchema: z.ZodType<Prisma.AppointmentTypeInclude> = z.object({
  Appointments: z.union([z.boolean(),z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AppointmentTypeCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const AppointmentTypeArgsSchema: z.ZodType<Prisma.AppointmentTypeDefaultArgs> = z.object({
  select: z.lazy(() => AppointmentTypeSelectSchema).optional(),
  include: z.lazy(() => AppointmentTypeIncludeSchema).optional(),
}).strict();

export const AppointmentTypeCountOutputTypeArgsSchema: z.ZodType<Prisma.AppointmentTypeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AppointmentTypeCountOutputTypeSelectSchema).nullish(),
}).strict();

export const AppointmentTypeCountOutputTypeSelectSchema: z.ZodType<Prisma.AppointmentTypeCountOutputTypeSelect> = z.object({
  Appointments: z.boolean().optional(),
}).strict();

export const AppointmentTypeSelectSchema: z.ZodType<Prisma.AppointmentTypeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  color_code: z.boolean().optional(),
  bu_appointment_type_id: z.boolean().optional(),
  sub_type_id: z.boolean().optional(),
  sub_type_name: z.boolean().optional(),
  sub_type_duration: z.boolean().optional(),
  Appointments: z.union([z.boolean(),z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AppointmentTypeCountOutputTypeArgsSchema)]).optional(),
}).strict()

// APPOINTMENT
//------------------------------------------------------

export const AppointmentIncludeSchema: z.ZodType<Prisma.AppointmentInclude> = z.object({
  Department: z.union([z.boolean(),z.lazy(() => DepartmentArgsSchema)]).optional(),
  Client: z.union([z.boolean(),z.lazy(() => ClientArgsSchema)]).optional(),
  Patient: z.union([z.boolean(),z.lazy(() => PatientArgsSchema)]).optional(),
  AppointmentType: z.union([z.boolean(),z.lazy(() => AppointmentTypeArgsSchema)]).optional(),
  Reasons: z.union([z.boolean(),z.lazy(() => AppointmentReasonFindManyArgsSchema)]).optional(),
  StatusAudit: z.union([z.boolean(),z.lazy(() => AppointmentStatusAuditFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AppointmentCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const AppointmentArgsSchema: z.ZodType<Prisma.AppointmentDefaultArgs> = z.object({
  select: z.lazy(() => AppointmentSelectSchema).optional(),
  include: z.lazy(() => AppointmentIncludeSchema).optional(),
}).strict();

export const AppointmentCountOutputTypeArgsSchema: z.ZodType<Prisma.AppointmentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AppointmentCountOutputTypeSelectSchema).nullish(),
}).strict();

export const AppointmentCountOutputTypeSelectSchema: z.ZodType<Prisma.AppointmentCountOutputTypeSelect> = z.object({
  Reasons: z.boolean().optional(),
  StatusAudit: z.boolean().optional(),
}).strict();

export const AppointmentSelectSchema: z.ZodType<Prisma.AppointmentSelect> = z.object({
  id: z.boolean().optional(),
  ouid: z.boolean().optional(),
  resource_guid: z.boolean().optional(),
  department_id: z.boolean().optional(),
  client_id: z.boolean().optional(),
  patient_id: z.boolean().optional(),
  appointment_type_id: z.boolean().optional(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.boolean().optional(),
  date_created: z.boolean().optional(),
  date_ste: z.boolean().optional(),
  created_by: z.boolean().optional(),
  created_application_id: z.boolean().optional(),
  start_time: z.boolean().optional(),
  start_time_ms: z.boolean().optional(),
  duration: z.boolean().optional(),
  admission_status_id: z.boolean().optional(),
  admission_display_name: z.boolean().optional(),
  status_id: z.boolean().optional(),
  notes: z.boolean().optional(),
  is_deleted: z.boolean().optional(),
  modified_by: z.boolean().optional(),
  date_modified: z.boolean().optional(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.boolean().optional(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Department: z.union([z.boolean(),z.lazy(() => DepartmentArgsSchema)]).optional(),
  Client: z.union([z.boolean(),z.lazy(() => ClientArgsSchema)]).optional(),
  Patient: z.union([z.boolean(),z.lazy(() => PatientArgsSchema)]).optional(),
  AppointmentType: z.union([z.boolean(),z.lazy(() => AppointmentTypeArgsSchema)]).optional(),
  Reasons: z.union([z.boolean(),z.lazy(() => AppointmentReasonFindManyArgsSchema)]).optional(),
  StatusAudit: z.union([z.boolean(),z.lazy(() => AppointmentStatusAuditFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AppointmentCountOutputTypeArgsSchema)]).optional(),
}).strict()

// APPOINTMENT REASON
//------------------------------------------------------

export const AppointmentReasonIncludeSchema: z.ZodType<Prisma.AppointmentReasonInclude> = z.object({
  Appointment: z.union([z.boolean(),z.lazy(() => AppointmentArgsSchema)]).optional(),
}).strict();

export const AppointmentReasonArgsSchema: z.ZodType<Prisma.AppointmentReasonDefaultArgs> = z.object({
  select: z.lazy(() => AppointmentReasonSelectSchema).optional(),
  include: z.lazy(() => AppointmentReasonIncludeSchema).optional(),
}).strict();

export const AppointmentReasonSelectSchema: z.ZodType<Prisma.AppointmentReasonSelect> = z.object({
  appointment_id: z.boolean().optional(),
  reason_id: z.boolean().optional(),
  name: z.boolean().optional(),
  Appointment: z.union([z.boolean(),z.lazy(() => AppointmentArgsSchema)]).optional(),
}).strict()

// APPOINTMENT STATUS AUDIT
//------------------------------------------------------

export const AppointmentStatusAuditIncludeSchema: z.ZodType<Prisma.AppointmentStatusAuditInclude> = z.object({
  Appointment: z.union([z.boolean(),z.lazy(() => AppointmentArgsSchema)]).optional(),
}).strict();

export const AppointmentStatusAuditArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditDefaultArgs> = z.object({
  select: z.lazy(() => AppointmentStatusAuditSelectSchema).optional(),
  include: z.lazy(() => AppointmentStatusAuditIncludeSchema).optional(),
}).strict();

export const AppointmentStatusAuditSelectSchema: z.ZodType<Prisma.AppointmentStatusAuditSelect> = z.object({
  id: z.boolean().optional(),
  appointment_id: z.boolean().optional(),
  time_stamp: z.boolean().optional(),
  status_changed_to: z.boolean().optional(),
  changed_by_user_id: z.boolean().optional(),
  application_id: z.boolean().optional(),
  resource_id: z.boolean().optional(),
  resource_name: z.boolean().optional(),
  appointment_date_time: z.boolean().optional(),
  Appointment: z.union([z.boolean(),z.lazy(() => AppointmentArgsSchema)]).optional(),
}).strict()

// FILE PROCESSING RECORD
//------------------------------------------------------

export const FileProcessingRecordSelectSchema: z.ZodType<Prisma.FileProcessingRecordSelect> = z.object({
  id: z.boolean().optional(),
  file_name: z.boolean().optional(),
  process_time: z.boolean().optional(),
  file_size_bytes: z.boolean().optional(),
  total_time_ms: z.boolean().optional(),
  status: z.boolean().optional(),
  error_message: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const DepartmentWhereInputSchema: z.ZodType<Prisma.DepartmentWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => DepartmentWhereInputSchema), z.lazy(() => DepartmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DepartmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DepartmentWhereInputSchema), z.lazy(() => DepartmentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  language: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  Appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
});

export const DepartmentOrderByWithRelationInputSchema: z.ZodType<Prisma.DepartmentOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  language: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  Appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputSchema).optional(),
});

export const DepartmentWhereUniqueInputSchema: z.ZodType<Prisma.DepartmentWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => DepartmentWhereInputSchema), z.lazy(() => DepartmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DepartmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DepartmentWhereInputSchema), z.lazy(() => DepartmentWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  language: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  Appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
}));

export const DepartmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.DepartmentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  language: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => DepartmentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DepartmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DepartmentMinOrderByAggregateInputSchema).optional(),
});

export const DepartmentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DepartmentScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => DepartmentScalarWhereWithAggregatesInputSchema), z.lazy(() => DepartmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DepartmentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DepartmentScalarWhereWithAggregatesInputSchema), z.lazy(() => DepartmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  language: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
});

export const ClientWhereInputSchema: z.ZodType<Prisma.ClientWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ClientWhereInputSchema), z.lazy(() => ClientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClientWhereInputSchema), z.lazy(() => ClientWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  account_number_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  primary_phone_number: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_new_client: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_opt_in: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_org: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_phone_selected: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_locked: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_guest_account: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  Patients: z.lazy(() => PatientListRelationFilterSchema).optional(),
  Appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
});

export const ClientOrderByWithRelationInputSchema: z.ZodType<Prisma.ClientOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  account_number_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  primary_phone_number: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_new_client: z.lazy(() => SortOrderSchema).optional(),
  is_opt_in: z.lazy(() => SortOrderSchema).optional(),
  is_org: z.lazy(() => SortOrderSchema).optional(),
  is_phone_selected: z.lazy(() => SortOrderSchema).optional(),
  is_locked: z.lazy(() => SortOrderSchema).optional(),
  is_guest_account: z.lazy(() => SortOrderSchema).optional(),
  Patients: z.lazy(() => PatientOrderByRelationAggregateInputSchema).optional(),
  Appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputSchema).optional(),
});

export const ClientWhereUniqueInputSchema: z.ZodType<Prisma.ClientWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ClientWhereInputSchema), z.lazy(() => ClientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClientWhereInputSchema), z.lazy(() => ClientWhereInputSchema).array() ]).optional(),
  account_number_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  primary_phone_number: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_new_client: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_opt_in: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_org: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_phone_selected: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_locked: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_guest_account: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  Patients: z.lazy(() => PatientListRelationFilterSchema).optional(),
  Appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
}));

export const ClientOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClientOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  account_number_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  primary_phone_number: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_new_client: z.lazy(() => SortOrderSchema).optional(),
  is_opt_in: z.lazy(() => SortOrderSchema).optional(),
  is_org: z.lazy(() => SortOrderSchema).optional(),
  is_phone_selected: z.lazy(() => SortOrderSchema).optional(),
  is_locked: z.lazy(() => SortOrderSchema).optional(),
  is_guest_account: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ClientCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClientMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClientMinOrderByAggregateInputSchema).optional(),
});

export const ClientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ClientScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ClientScalarWhereWithAggregatesInputSchema), z.lazy(() => ClientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClientScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClientScalarWhereWithAggregatesInputSchema), z.lazy(() => ClientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  account_number_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  primary_phone_number: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  is_new_client: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  is_opt_in: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  is_org: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  is_phone_selected: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  is_locked: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  is_guest_account: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
});

export const PatientWhereInputSchema: z.ZodType<Prisma.PatientWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => PatientWhereInputSchema), z.lazy(() => PatientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PatientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PatientWhereInputSchema), z.lazy(() => PatientWhereInputSchema).array() ]).optional(),
  patient_id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  pet_id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  client_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  record_number: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  pet_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_new_patient: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  has_belongings: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  breed: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  species: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  date_of_birth: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  profile_image_url: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sex_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sterilization: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  last_weight_kgm: z.union([ z.lazy(() => FloatNullableFilterSchema), z.number() ]).optional().nullable(),
  last_weight_lb: z.union([ z.lazy(() => FloatNullableFilterSchema), z.number() ]).optional().nullable(),
  alert: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  has_bites_or_scratches: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  Client: z.union([ z.lazy(() => ClientNullableRelationFilterSchema), z.lazy(() => ClientWhereInputSchema) ]).optional().nullable(),
  Appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
});

export const PatientOrderByWithRelationInputSchema: z.ZodType<Prisma.PatientOrderByWithRelationInput> = z.strictObject({
  patient_id: z.lazy(() => SortOrderSchema).optional(),
  pet_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  record_number: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  pet_name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_new_patient: z.lazy(() => SortOrderSchema).optional(),
  has_belongings: z.lazy(() => SortOrderSchema).optional(),
  breed: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  species: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  date_of_birth: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  profile_image_url: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sex_name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sterilization: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_weight_kgm: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_weight_lb: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alert: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  has_bites_or_scratches: z.lazy(() => SortOrderSchema).optional(),
  Client: z.lazy(() => ClientOrderByWithRelationInputSchema).optional(),
  Appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputSchema).optional(),
});

export const PatientWhereUniqueInputSchema: z.ZodType<Prisma.PatientWhereUniqueInput> = z.union([
  z.object({
    patient_id: z.string(),
    pet_id: z.string(),
  }),
  z.object({
    patient_id: z.string(),
  }),
  z.object({
    pet_id: z.string(),
  }),
])
.and(z.strictObject({
  patient_id: z.string().optional(),
  pet_id: z.string().optional(),
  AND: z.union([ z.lazy(() => PatientWhereInputSchema), z.lazy(() => PatientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PatientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PatientWhereInputSchema), z.lazy(() => PatientWhereInputSchema).array() ]).optional(),
  client_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  record_number: z.union([ z.lazy(() => IntNullableFilterSchema), z.number().int() ]).optional().nullable(),
  pet_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_new_patient: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  has_belongings: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  breed: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  species: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  date_of_birth: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  profile_image_url: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sex_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sterilization: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  last_weight_kgm: z.union([ z.lazy(() => FloatNullableFilterSchema), z.number() ]).optional().nullable(),
  last_weight_lb: z.union([ z.lazy(() => FloatNullableFilterSchema), z.number() ]).optional().nullable(),
  alert: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  has_bites_or_scratches: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  Client: z.union([ z.lazy(() => ClientNullableRelationFilterSchema), z.lazy(() => ClientWhereInputSchema) ]).optional().nullable(),
  Appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
}));

export const PatientOrderByWithAggregationInputSchema: z.ZodType<Prisma.PatientOrderByWithAggregationInput> = z.strictObject({
  patient_id: z.lazy(() => SortOrderSchema).optional(),
  pet_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  record_number: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  pet_name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_new_patient: z.lazy(() => SortOrderSchema).optional(),
  has_belongings: z.lazy(() => SortOrderSchema).optional(),
  breed: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  species: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  date_of_birth: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  profile_image_url: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sex_name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sterilization: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_weight_kgm: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_weight_lb: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alert: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  has_bites_or_scratches: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PatientCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PatientAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PatientMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PatientMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PatientSumOrderByAggregateInputSchema).optional(),
});

export const PatientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PatientScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => PatientScalarWhereWithAggregatesInputSchema), z.lazy(() => PatientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PatientScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PatientScalarWhereWithAggregatesInputSchema), z.lazy(() => PatientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  patient_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  pet_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  client_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  record_number: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
  pet_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  is_new_patient: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  has_belongings: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  breed: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  species: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  date_of_birth: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  profile_image_url: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  sex_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  sterilization: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  last_weight_kgm: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
  last_weight_lb: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
  alert: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  has_bites_or_scratches: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
});

export const AppointmentTypeWhereInputSchema: z.ZodType<Prisma.AppointmentTypeWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AppointmentTypeWhereInputSchema), z.lazy(() => AppointmentTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentTypeWhereInputSchema), z.lazy(() => AppointmentTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  color_code: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  bu_appointment_type_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sub_type_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sub_type_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sub_type_duration: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  Appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
});

export const AppointmentTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.AppointmentTypeOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  color_code: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  bu_appointment_type_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sub_type_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sub_type_name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sub_type_duration: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  Appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputSchema).optional(),
});

export const AppointmentTypeWhereUniqueInputSchema: z.ZodType<Prisma.AppointmentTypeWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AppointmentTypeWhereInputSchema), z.lazy(() => AppointmentTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentTypeWhereInputSchema), z.lazy(() => AppointmentTypeWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  color_code: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  bu_appointment_type_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sub_type_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sub_type_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sub_type_duration: z.union([ z.lazy(() => IntNullableFilterSchema), z.number().int() ]).optional().nullable(),
  Appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
}));

export const AppointmentTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.AppointmentTypeOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  color_code: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  bu_appointment_type_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sub_type_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sub_type_name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sub_type_duration: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => AppointmentTypeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AppointmentTypeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AppointmentTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AppointmentTypeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AppointmentTypeSumOrderByAggregateInputSchema).optional(),
});

export const AppointmentTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AppointmentTypeScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AppointmentTypeScalarWhereWithAggregatesInputSchema), z.lazy(() => AppointmentTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentTypeScalarWhereWithAggregatesInputSchema), z.lazy(() => AppointmentTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  color_code: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  bu_appointment_type_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  sub_type_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  sub_type_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  sub_type_duration: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
});

export const AppointmentWhereInputSchema: z.ZodType<Prisma.AppointmentWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AppointmentWhereInputSchema), z.lazy(() => AppointmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentWhereInputSchema), z.lazy(() => AppointmentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  ouid: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  resource_guid: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  department_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  client_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patient_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  appointment_type_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_emergency: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  appointment_date: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  date_created: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  date_ste: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  created_by: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  created_application_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  start_time: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  start_time_ms: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  duration: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  admission_status_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  admission_display_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  status_id: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_deleted: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  modified_by: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  date_modified: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_walkin: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  arrival_ts: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_confirmed: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_doctor: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_real_staff: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  payment_due_warning: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  Department: z.union([ z.lazy(() => DepartmentNullableRelationFilterSchema), z.lazy(() => DepartmentWhereInputSchema) ]).optional().nullable(),
  Client: z.union([ z.lazy(() => ClientNullableRelationFilterSchema), z.lazy(() => ClientWhereInputSchema) ]).optional().nullable(),
  Patient: z.union([ z.lazy(() => PatientNullableRelationFilterSchema), z.lazy(() => PatientWhereInputSchema) ]).optional().nullable(),
  AppointmentType: z.union([ z.lazy(() => AppointmentTypeNullableRelationFilterSchema), z.lazy(() => AppointmentTypeWhereInputSchema) ]).optional().nullable(),
  Reasons: z.lazy(() => AppointmentReasonListRelationFilterSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditListRelationFilterSchema).optional(),
});

export const AppointmentOrderByWithRelationInputSchema: z.ZodType<Prisma.AppointmentOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  ouid: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  resource_guid: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  department_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  client_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patient_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  appointment_type_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_emergency: z.lazy(() => SortOrderSchema).optional(),
  appointment_date: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  date_created: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  date_ste: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_by: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_application_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  start_time: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  start_time_ms: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  duration: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  admission_status_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  admission_display_name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_deleted: z.lazy(() => SortOrderSchema).optional(),
  modified_by: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  date_modified: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_walkin: z.lazy(() => SortOrderSchema).optional(),
  arrival_ts: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_confirmed: z.lazy(() => SortOrderSchema).optional(),
  is_doctor: z.lazy(() => SortOrderSchema).optional(),
  is_real_staff: z.lazy(() => SortOrderSchema).optional(),
  payment_due_warning: z.lazy(() => SortOrderSchema).optional(),
  Department: z.lazy(() => DepartmentOrderByWithRelationInputSchema).optional(),
  Client: z.lazy(() => ClientOrderByWithRelationInputSchema).optional(),
  Patient: z.lazy(() => PatientOrderByWithRelationInputSchema).optional(),
  AppointmentType: z.lazy(() => AppointmentTypeOrderByWithRelationInputSchema).optional(),
  Reasons: z.lazy(() => AppointmentReasonOrderByRelationAggregateInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditOrderByRelationAggregateInputSchema).optional(),
});

export const AppointmentWhereUniqueInputSchema: z.ZodType<Prisma.AppointmentWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AppointmentWhereInputSchema), z.lazy(() => AppointmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentWhereInputSchema), z.lazy(() => AppointmentWhereInputSchema).array() ]).optional(),
  ouid: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  resource_guid: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  department_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  client_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patient_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  appointment_type_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_emergency: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  appointment_date: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  date_created: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  date_ste: z.union([ z.lazy(() => IntNullableFilterSchema), z.number().int() ]).optional().nullable(),
  created_by: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  created_application_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  start_time: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  start_time_ms: z.union([ z.lazy(() => IntNullableFilterSchema), z.number().int() ]).optional().nullable(),
  duration: z.union([ z.lazy(() => IntNullableFilterSchema), z.number().int() ]).optional().nullable(),
  admission_status_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  admission_display_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  status_id: z.union([ z.lazy(() => IntNullableFilterSchema), z.number().int() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_deleted: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  modified_by: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  date_modified: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_walkin: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  arrival_ts: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_confirmed: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_doctor: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_real_staff: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  payment_due_warning: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  Department: z.union([ z.lazy(() => DepartmentNullableRelationFilterSchema), z.lazy(() => DepartmentWhereInputSchema) ]).optional().nullable(),
  Client: z.union([ z.lazy(() => ClientNullableRelationFilterSchema), z.lazy(() => ClientWhereInputSchema) ]).optional().nullable(),
  Patient: z.union([ z.lazy(() => PatientNullableRelationFilterSchema), z.lazy(() => PatientWhereInputSchema) ]).optional().nullable(),
  AppointmentType: z.union([ z.lazy(() => AppointmentTypeNullableRelationFilterSchema), z.lazy(() => AppointmentTypeWhereInputSchema) ]).optional().nullable(),
  Reasons: z.lazy(() => AppointmentReasonListRelationFilterSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditListRelationFilterSchema).optional(),
}));

export const AppointmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.AppointmentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  ouid: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  resource_guid: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  department_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  client_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patient_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  appointment_type_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_emergency: z.lazy(() => SortOrderSchema).optional(),
  appointment_date: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  date_created: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  date_ste: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_by: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_application_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  start_time: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  start_time_ms: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  duration: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  admission_status_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  admission_display_name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_deleted: z.lazy(() => SortOrderSchema).optional(),
  modified_by: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  date_modified: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_walkin: z.lazy(() => SortOrderSchema).optional(),
  arrival_ts: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_confirmed: z.lazy(() => SortOrderSchema).optional(),
  is_doctor: z.lazy(() => SortOrderSchema).optional(),
  is_real_staff: z.lazy(() => SortOrderSchema).optional(),
  payment_due_warning: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AppointmentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AppointmentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AppointmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AppointmentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AppointmentSumOrderByAggregateInputSchema).optional(),
});

export const AppointmentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AppointmentScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema), z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema), z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  ouid: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  resource_guid: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  department_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  client_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  patient_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  appointment_type_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  is_emergency: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  appointment_date: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  date_created: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  date_ste: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
  created_by: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  created_application_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  start_time: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  start_time_ms: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
  duration: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
  admission_status_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  admission_display_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  status_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  is_deleted: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  modified_by: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  date_modified: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  is_walkin: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  arrival_ts: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  is_confirmed: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  is_doctor: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  is_real_staff: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  payment_due_warning: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
});

export const AppointmentReasonWhereInputSchema: z.ZodType<Prisma.AppointmentReasonWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AppointmentReasonWhereInputSchema), z.lazy(() => AppointmentReasonWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentReasonWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentReasonWhereInputSchema), z.lazy(() => AppointmentReasonWhereInputSchema).array() ]).optional(),
  appointment_id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  reason_id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  Appointment: z.union([ z.lazy(() => AppointmentRelationFilterSchema), z.lazy(() => AppointmentWhereInputSchema) ]).optional(),
});

export const AppointmentReasonOrderByWithRelationInputSchema: z.ZodType<Prisma.AppointmentReasonOrderByWithRelationInput> = z.strictObject({
  appointment_id: z.lazy(() => SortOrderSchema).optional(),
  reason_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  Appointment: z.lazy(() => AppointmentOrderByWithRelationInputSchema).optional(),
});

export const AppointmentReasonWhereUniqueInputSchema: z.ZodType<Prisma.AppointmentReasonWhereUniqueInput> = z.object({
  appointment_id_reason_id: z.lazy(() => AppointmentReasonAppointment_idReason_idCompoundUniqueInputSchema),
})
.and(z.strictObject({
  appointment_id_reason_id: z.lazy(() => AppointmentReasonAppointment_idReason_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AppointmentReasonWhereInputSchema), z.lazy(() => AppointmentReasonWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentReasonWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentReasonWhereInputSchema), z.lazy(() => AppointmentReasonWhereInputSchema).array() ]).optional(),
  appointment_id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  reason_id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  Appointment: z.union([ z.lazy(() => AppointmentRelationFilterSchema), z.lazy(() => AppointmentWhereInputSchema) ]).optional(),
}));

export const AppointmentReasonOrderByWithAggregationInputSchema: z.ZodType<Prisma.AppointmentReasonOrderByWithAggregationInput> = z.strictObject({
  appointment_id: z.lazy(() => SortOrderSchema).optional(),
  reason_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => AppointmentReasonCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AppointmentReasonMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AppointmentReasonMinOrderByAggregateInputSchema).optional(),
});

export const AppointmentReasonScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AppointmentReasonScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AppointmentReasonScalarWhereWithAggregatesInputSchema), z.lazy(() => AppointmentReasonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentReasonScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentReasonScalarWhereWithAggregatesInputSchema), z.lazy(() => AppointmentReasonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  appointment_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  reason_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
});

export const AppointmentStatusAuditWhereInputSchema: z.ZodType<Prisma.AppointmentStatusAuditWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AppointmentStatusAuditWhereInputSchema), z.lazy(() => AppointmentStatusAuditWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentStatusAuditWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentStatusAuditWhereInputSchema), z.lazy(() => AppointmentStatusAuditWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  appointment_id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  time_stamp: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  status_changed_to: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  changed_by_user_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  application_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  resource_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  resource_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  appointment_date_time: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  Appointment: z.union([ z.lazy(() => AppointmentRelationFilterSchema), z.lazy(() => AppointmentWhereInputSchema) ]).optional(),
});

export const AppointmentStatusAuditOrderByWithRelationInputSchema: z.ZodType<Prisma.AppointmentStatusAuditOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  appointment_id: z.lazy(() => SortOrderSchema).optional(),
  time_stamp: z.lazy(() => SortOrderSchema).optional(),
  status_changed_to: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  changed_by_user_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  application_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  resource_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  resource_name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  appointment_date_time: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  Appointment: z.lazy(() => AppointmentOrderByWithRelationInputSchema).optional(),
});

export const AppointmentStatusAuditWhereUniqueInputSchema: z.ZodType<Prisma.AppointmentStatusAuditWhereUniqueInput> = z.object({
  id: z.number().int(),
})
.and(z.strictObject({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => AppointmentStatusAuditWhereInputSchema), z.lazy(() => AppointmentStatusAuditWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentStatusAuditWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentStatusAuditWhereInputSchema), z.lazy(() => AppointmentStatusAuditWhereInputSchema).array() ]).optional(),
  appointment_id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  time_stamp: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  status_changed_to: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  changed_by_user_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  application_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  resource_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  resource_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  appointment_date_time: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  Appointment: z.union([ z.lazy(() => AppointmentRelationFilterSchema), z.lazy(() => AppointmentWhereInputSchema) ]).optional(),
}));

export const AppointmentStatusAuditOrderByWithAggregationInputSchema: z.ZodType<Prisma.AppointmentStatusAuditOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  appointment_id: z.lazy(() => SortOrderSchema).optional(),
  time_stamp: z.lazy(() => SortOrderSchema).optional(),
  status_changed_to: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  changed_by_user_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  application_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  resource_id: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  resource_name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  appointment_date_time: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => AppointmentStatusAuditCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AppointmentStatusAuditAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AppointmentStatusAuditMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AppointmentStatusAuditMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AppointmentStatusAuditSumOrderByAggregateInputSchema).optional(),
});

export const AppointmentStatusAuditScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AppointmentStatusAuditScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AppointmentStatusAuditScalarWhereWithAggregatesInputSchema), z.lazy(() => AppointmentStatusAuditScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentStatusAuditScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentStatusAuditScalarWhereWithAggregatesInputSchema), z.lazy(() => AppointmentStatusAuditScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  appointment_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  time_stamp: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  status_changed_to: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  changed_by_user_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  application_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  resource_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  resource_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  appointment_date_time: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
});

export const FileProcessingRecordWhereInputSchema: z.ZodType<Prisma.FileProcessingRecordWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => FileProcessingRecordWhereInputSchema), z.lazy(() => FileProcessingRecordWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FileProcessingRecordWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FileProcessingRecordWhereInputSchema), z.lazy(() => FileProcessingRecordWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  file_name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  process_time: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  file_size_bytes: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  total_time_ms: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  error_message: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
});

export const FileProcessingRecordOrderByWithRelationInputSchema: z.ZodType<Prisma.FileProcessingRecordOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  file_name: z.lazy(() => SortOrderSchema).optional(),
  process_time: z.lazy(() => SortOrderSchema).optional(),
  file_size_bytes: z.lazy(() => SortOrderSchema).optional(),
  total_time_ms: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  error_message: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
});

export const FileProcessingRecordWhereUniqueInputSchema: z.ZodType<Prisma.FileProcessingRecordWhereUniqueInput> = z.object({
  id: z.number().int(),
})
.and(z.strictObject({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => FileProcessingRecordWhereInputSchema), z.lazy(() => FileProcessingRecordWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FileProcessingRecordWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FileProcessingRecordWhereInputSchema), z.lazy(() => FileProcessingRecordWhereInputSchema).array() ]).optional(),
  file_name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  process_time: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  file_size_bytes: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  total_time_ms: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  error_message: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
}));

export const FileProcessingRecordOrderByWithAggregationInputSchema: z.ZodType<Prisma.FileProcessingRecordOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  file_name: z.lazy(() => SortOrderSchema).optional(),
  process_time: z.lazy(() => SortOrderSchema).optional(),
  file_size_bytes: z.lazy(() => SortOrderSchema).optional(),
  total_time_ms: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  error_message: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => FileProcessingRecordCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => FileProcessingRecordAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FileProcessingRecordMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FileProcessingRecordMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => FileProcessingRecordSumOrderByAggregateInputSchema).optional(),
});

export const FileProcessingRecordScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FileProcessingRecordScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => FileProcessingRecordScalarWhereWithAggregatesInputSchema), z.lazy(() => FileProcessingRecordScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FileProcessingRecordScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FileProcessingRecordScalarWhereWithAggregatesInputSchema), z.lazy(() => FileProcessingRecordScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  file_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  process_time: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  file_size_bytes: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  total_time_ms: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema), z.number() ]).optional(),
  status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  error_message: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
});

export const DepartmentCreateInputSchema: z.ZodType<Prisma.DepartmentCreateInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  language: z.string().optional().nullable(),
  Appointments: z.lazy(() => AppointmentCreateNestedManyWithoutDepartmentInputSchema).optional(),
});

export const DepartmentUncheckedCreateInputSchema: z.ZodType<Prisma.DepartmentUncheckedCreateInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  language: z.string().optional().nullable(),
  Appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional(),
});

export const DepartmentUpdateInputSchema: z.ZodType<Prisma.DepartmentUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Appointments: z.lazy(() => AppointmentUpdateManyWithoutDepartmentNestedInputSchema).optional(),
});

export const DepartmentUncheckedUpdateInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional(),
});

export const DepartmentCreateManyInputSchema: z.ZodType<Prisma.DepartmentCreateManyInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  language: z.string().optional().nullable(),
});

export const DepartmentUpdateManyMutationInputSchema: z.ZodType<Prisma.DepartmentUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const DepartmentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const ClientCreateInputSchema: z.ZodType<Prisma.ClientCreateInput> = z.strictObject({
  id: z.string(),
  account_number_id: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  primary_phone_number: z.string().optional().nullable(),
  is_new_client: z.boolean().optional(),
  is_opt_in: z.boolean().optional(),
  is_org: z.boolean().optional(),
  is_phone_selected: z.boolean().optional(),
  is_locked: z.boolean().optional(),
  is_guest_account: z.boolean().optional(),
  Patients: z.lazy(() => PatientCreateNestedManyWithoutClientInputSchema).optional(),
  Appointments: z.lazy(() => AppointmentCreateNestedManyWithoutClientInputSchema).optional(),
});

export const ClientUncheckedCreateInputSchema: z.ZodType<Prisma.ClientUncheckedCreateInput> = z.strictObject({
  id: z.string(),
  account_number_id: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  primary_phone_number: z.string().optional().nullable(),
  is_new_client: z.boolean().optional(),
  is_opt_in: z.boolean().optional(),
  is_org: z.boolean().optional(),
  is_phone_selected: z.boolean().optional(),
  is_locked: z.boolean().optional(),
  is_guest_account: z.boolean().optional(),
  Patients: z.lazy(() => PatientUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
  Appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
});

export const ClientUpdateInputSchema: z.ZodType<Prisma.ClientUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_number_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_phone_number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_client: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_opt_in: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_org: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_phone_selected: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_locked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_guest_account: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Patients: z.lazy(() => PatientUpdateManyWithoutClientNestedInputSchema).optional(),
  Appointments: z.lazy(() => AppointmentUpdateManyWithoutClientNestedInputSchema).optional(),
});

export const ClientUncheckedUpdateInputSchema: z.ZodType<Prisma.ClientUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_number_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_phone_number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_client: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_opt_in: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_org: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_phone_selected: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_locked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_guest_account: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Patients: z.lazy(() => PatientUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
  Appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
});

export const ClientCreateManyInputSchema: z.ZodType<Prisma.ClientCreateManyInput> = z.strictObject({
  id: z.string(),
  account_number_id: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  primary_phone_number: z.string().optional().nullable(),
  is_new_client: z.boolean().optional(),
  is_opt_in: z.boolean().optional(),
  is_org: z.boolean().optional(),
  is_phone_selected: z.boolean().optional(),
  is_locked: z.boolean().optional(),
  is_guest_account: z.boolean().optional(),
});

export const ClientUpdateManyMutationInputSchema: z.ZodType<Prisma.ClientUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_number_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_phone_number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_client: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_opt_in: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_org: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_phone_selected: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_locked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_guest_account: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ClientUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ClientUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_number_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_phone_number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_client: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_opt_in: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_org: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_phone_selected: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_locked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_guest_account: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PatientCreateInputSchema: z.ZodType<Prisma.PatientCreateInput> = z.strictObject({
  patient_id: z.string(),
  pet_id: z.string(),
  record_number: z.number().int().optional().nullable(),
  pet_name: z.string().optional().nullable(),
  is_new_patient: z.boolean().optional(),
  has_belongings: z.boolean().optional(),
  breed: z.string().optional().nullable(),
  species: z.string().optional().nullable(),
  date_of_birth: z.string().optional().nullable(),
  profile_image_url: z.string().optional().nullable(),
  sex_name: z.string().optional().nullable(),
  sterilization: z.string().optional().nullable(),
  last_weight_kgm: z.number().optional().nullable(),
  last_weight_lb: z.number().optional().nullable(),
  alert: z.string().optional().nullable(),
  has_bites_or_scratches: z.boolean().optional(),
  Client: z.lazy(() => ClientCreateNestedOneWithoutPatientsInputSchema).optional(),
  Appointments: z.lazy(() => AppointmentCreateNestedManyWithoutPatientInputSchema).optional(),
});

export const PatientUncheckedCreateInputSchema: z.ZodType<Prisma.PatientUncheckedCreateInput> = z.strictObject({
  patient_id: z.string(),
  pet_id: z.string(),
  client_id: z.string().optional().nullable(),
  record_number: z.number().int().optional().nullable(),
  pet_name: z.string().optional().nullable(),
  is_new_patient: z.boolean().optional(),
  has_belongings: z.boolean().optional(),
  breed: z.string().optional().nullable(),
  species: z.string().optional().nullable(),
  date_of_birth: z.string().optional().nullable(),
  profile_image_url: z.string().optional().nullable(),
  sex_name: z.string().optional().nullable(),
  sterilization: z.string().optional().nullable(),
  last_weight_kgm: z.number().optional().nullable(),
  last_weight_lb: z.number().optional().nullable(),
  alert: z.string().optional().nullable(),
  has_bites_or_scratches: z.boolean().optional(),
  Appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutPatientInputSchema).optional(),
});

export const PatientUpdateInputSchema: z.ZodType<Prisma.PatientUpdateInput> = z.strictObject({
  patient_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  record_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pet_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_patient: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  has_belongings: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  species: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_of_birth: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profile_image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sex_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sterilization: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_kgm: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_lb: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alert: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_bites_or_scratches: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Client: z.lazy(() => ClientUpdateOneWithoutPatientsNestedInputSchema).optional(),
  Appointments: z.lazy(() => AppointmentUpdateManyWithoutPatientNestedInputSchema).optional(),
});

export const PatientUncheckedUpdateInputSchema: z.ZodType<Prisma.PatientUncheckedUpdateInput> = z.strictObject({
  patient_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  client_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  record_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pet_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_patient: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  has_belongings: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  species: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_of_birth: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profile_image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sex_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sterilization: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_kgm: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_lb: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alert: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_bites_or_scratches: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutPatientNestedInputSchema).optional(),
});

export const PatientCreateManyInputSchema: z.ZodType<Prisma.PatientCreateManyInput> = z.strictObject({
  patient_id: z.string(),
  pet_id: z.string(),
  client_id: z.string().optional().nullable(),
  record_number: z.number().int().optional().nullable(),
  pet_name: z.string().optional().nullable(),
  is_new_patient: z.boolean().optional(),
  has_belongings: z.boolean().optional(),
  breed: z.string().optional().nullable(),
  species: z.string().optional().nullable(),
  date_of_birth: z.string().optional().nullable(),
  profile_image_url: z.string().optional().nullable(),
  sex_name: z.string().optional().nullable(),
  sterilization: z.string().optional().nullable(),
  last_weight_kgm: z.number().optional().nullable(),
  last_weight_lb: z.number().optional().nullable(),
  alert: z.string().optional().nullable(),
  has_bites_or_scratches: z.boolean().optional(),
});

export const PatientUpdateManyMutationInputSchema: z.ZodType<Prisma.PatientUpdateManyMutationInput> = z.strictObject({
  patient_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  record_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pet_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_patient: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  has_belongings: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  species: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_of_birth: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profile_image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sex_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sterilization: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_kgm: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_lb: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alert: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_bites_or_scratches: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PatientUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PatientUncheckedUpdateManyInput> = z.strictObject({
  patient_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  client_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  record_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pet_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_patient: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  has_belongings: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  species: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_of_birth: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profile_image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sex_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sterilization: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_kgm: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_lb: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alert: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_bites_or_scratches: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AppointmentTypeCreateInputSchema: z.ZodType<Prisma.AppointmentTypeCreateInput> = z.strictObject({
  id: z.string(),
  name: z.string().optional().nullable(),
  color_code: z.string().optional().nullable(),
  bu_appointment_type_id: z.string().optional().nullable(),
  sub_type_id: z.string().optional().nullable(),
  sub_type_name: z.string().optional().nullable(),
  sub_type_duration: z.number().int().optional().nullable(),
  Appointments: z.lazy(() => AppointmentCreateNestedManyWithoutAppointmentTypeInputSchema).optional(),
});

export const AppointmentTypeUncheckedCreateInputSchema: z.ZodType<Prisma.AppointmentTypeUncheckedCreateInput> = z.strictObject({
  id: z.string(),
  name: z.string().optional().nullable(),
  color_code: z.string().optional().nullable(),
  bu_appointment_type_id: z.string().optional().nullable(),
  sub_type_id: z.string().optional().nullable(),
  sub_type_name: z.string().optional().nullable(),
  sub_type_duration: z.number().int().optional().nullable(),
  Appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutAppointmentTypeInputSchema).optional(),
});

export const AppointmentTypeUpdateInputSchema: z.ZodType<Prisma.AppointmentTypeUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color_code: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bu_appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Appointments: z.lazy(() => AppointmentUpdateManyWithoutAppointmentTypeNestedInputSchema).optional(),
});

export const AppointmentTypeUncheckedUpdateInputSchema: z.ZodType<Prisma.AppointmentTypeUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color_code: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bu_appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutAppointmentTypeNestedInputSchema).optional(),
});

export const AppointmentTypeCreateManyInputSchema: z.ZodType<Prisma.AppointmentTypeCreateManyInput> = z.strictObject({
  id: z.string(),
  name: z.string().optional().nullable(),
  color_code: z.string().optional().nullable(),
  bu_appointment_type_id: z.string().optional().nullable(),
  sub_type_id: z.string().optional().nullable(),
  sub_type_name: z.string().optional().nullable(),
  sub_type_duration: z.number().int().optional().nullable(),
});

export const AppointmentTypeUpdateManyMutationInputSchema: z.ZodType<Prisma.AppointmentTypeUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color_code: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bu_appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentTypeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AppointmentTypeUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color_code: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bu_appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentCreateInputSchema: z.ZodType<Prisma.AppointmentCreateInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Department: z.lazy(() => DepartmentCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Client: z.lazy(() => ClientCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Patient: z.lazy(() => PatientCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  AppointmentType: z.lazy(() => AppointmentTypeCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Reasons: z.lazy(() => AppointmentReasonCreateNestedManyWithoutAppointmentInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentUncheckedCreateInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  department_id: z.string().optional().nullable(),
  client_id: z.string().optional().nullable(),
  patient_id: z.string().optional().nullable(),
  appointment_type_id: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Reasons: z.lazy(() => AppointmentReasonUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentUpdateInputSchema: z.ZodType<Prisma.AppointmentUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Department: z.lazy(() => DepartmentUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Client: z.lazy(() => ClientUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Patient: z.lazy(() => PatientUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  AppointmentType: z.lazy(() => AppointmentTypeUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Reasons: z.lazy(() => AppointmentReasonUpdateManyWithoutAppointmentNestedInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentUncheckedUpdateInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  department_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patient_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Reasons: z.lazy(() => AppointmentReasonUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentCreateManyInputSchema: z.ZodType<Prisma.AppointmentCreateManyInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  department_id: z.string().optional().nullable(),
  client_id: z.string().optional().nullable(),
  patient_id: z.string().optional().nullable(),
  appointment_type_id: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
});

export const AppointmentUpdateManyMutationInputSchema: z.ZodType<Prisma.AppointmentUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AppointmentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  department_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patient_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AppointmentReasonCreateInputSchema: z.ZodType<Prisma.AppointmentReasonCreateInput> = z.strictObject({
  reason_id: z.string(),
  name: z.string().optional().nullable(),
  Appointment: z.lazy(() => AppointmentCreateNestedOneWithoutReasonsInputSchema),
});

export const AppointmentReasonUncheckedCreateInputSchema: z.ZodType<Prisma.AppointmentReasonUncheckedCreateInput> = z.strictObject({
  appointment_id: z.string(),
  reason_id: z.string(),
  name: z.string().optional().nullable(),
});

export const AppointmentReasonUpdateInputSchema: z.ZodType<Prisma.AppointmentReasonUpdateInput> = z.strictObject({
  reason_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Appointment: z.lazy(() => AppointmentUpdateOneRequiredWithoutReasonsNestedInputSchema).optional(),
});

export const AppointmentReasonUncheckedUpdateInputSchema: z.ZodType<Prisma.AppointmentReasonUncheckedUpdateInput> = z.strictObject({
  appointment_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reason_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentReasonCreateManyInputSchema: z.ZodType<Prisma.AppointmentReasonCreateManyInput> = z.strictObject({
  appointment_id: z.string(),
  reason_id: z.string(),
  name: z.string().optional().nullable(),
});

export const AppointmentReasonUpdateManyMutationInputSchema: z.ZodType<Prisma.AppointmentReasonUpdateManyMutationInput> = z.strictObject({
  reason_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentReasonUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AppointmentReasonUncheckedUpdateManyInput> = z.strictObject({
  appointment_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reason_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentStatusAuditCreateInputSchema: z.ZodType<Prisma.AppointmentStatusAuditCreateInput> = z.strictObject({
  time_stamp: z.string(),
  status_changed_to: z.string().optional().nullable(),
  changed_by_user_id: z.string().optional().nullable(),
  application_id: z.string().optional().nullable(),
  resource_id: z.string().optional().nullable(),
  resource_name: z.string().optional().nullable(),
  appointment_date_time: z.string().optional().nullable(),
  Appointment: z.lazy(() => AppointmentCreateNestedOneWithoutStatusAuditInputSchema),
});

export const AppointmentStatusAuditUncheckedCreateInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  appointment_id: z.string(),
  time_stamp: z.string(),
  status_changed_to: z.string().optional().nullable(),
  changed_by_user_id: z.string().optional().nullable(),
  application_id: z.string().optional().nullable(),
  resource_id: z.string().optional().nullable(),
  resource_name: z.string().optional().nullable(),
  appointment_date_time: z.string().optional().nullable(),
});

export const AppointmentStatusAuditUpdateInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUpdateInput> = z.strictObject({
  time_stamp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status_changed_to: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  changed_by_user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_date_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Appointment: z.lazy(() => AppointmentUpdateOneRequiredWithoutStatusAuditNestedInputSchema).optional(),
});

export const AppointmentStatusAuditUncheckedUpdateInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  time_stamp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status_changed_to: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  changed_by_user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_date_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentStatusAuditCreateManyInputSchema: z.ZodType<Prisma.AppointmentStatusAuditCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  appointment_id: z.string(),
  time_stamp: z.string(),
  status_changed_to: z.string().optional().nullable(),
  changed_by_user_id: z.string().optional().nullable(),
  application_id: z.string().optional().nullable(),
  resource_id: z.string().optional().nullable(),
  resource_name: z.string().optional().nullable(),
  appointment_date_time: z.string().optional().nullable(),
});

export const AppointmentStatusAuditUpdateManyMutationInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUpdateManyMutationInput> = z.strictObject({
  time_stamp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status_changed_to: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  changed_by_user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_date_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentStatusAuditUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  time_stamp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status_changed_to: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  changed_by_user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_date_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const FileProcessingRecordCreateInputSchema: z.ZodType<Prisma.FileProcessingRecordCreateInput> = z.strictObject({
  file_name: z.string(),
  process_time: z.coerce.date().optional(),
  file_size_bytes: z.number().int(),
  total_time_ms: z.number(),
  status: z.string(),
  error_message: z.string().optional().nullable(),
});

export const FileProcessingRecordUncheckedCreateInputSchema: z.ZodType<Prisma.FileProcessingRecordUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  file_name: z.string(),
  process_time: z.coerce.date().optional(),
  file_size_bytes: z.number().int(),
  total_time_ms: z.number(),
  status: z.string(),
  error_message: z.string().optional().nullable(),
});

export const FileProcessingRecordUpdateInputSchema: z.ZodType<Prisma.FileProcessingRecordUpdateInput> = z.strictObject({
  file_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  process_time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  file_size_bytes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  total_time_ms: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  error_message: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const FileProcessingRecordUncheckedUpdateInputSchema: z.ZodType<Prisma.FileProcessingRecordUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  file_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  process_time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  file_size_bytes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  total_time_ms: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  error_message: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const FileProcessingRecordCreateManyInputSchema: z.ZodType<Prisma.FileProcessingRecordCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  file_name: z.string(),
  process_time: z.coerce.date().optional(),
  file_size_bytes: z.number().int(),
  total_time_ms: z.number(),
  status: z.string(),
  error_message: z.string().optional().nullable(),
});

export const FileProcessingRecordUpdateManyMutationInputSchema: z.ZodType<Prisma.FileProcessingRecordUpdateManyMutationInput> = z.strictObject({
  file_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  process_time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  file_size_bytes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  total_time_ms: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  error_message: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const FileProcessingRecordUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FileProcessingRecordUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  file_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  process_time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  file_size_bytes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  total_time_ms: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  error_message: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
});

export const AppointmentListRelationFilterSchema: z.ZodType<Prisma.AppointmentListRelationFilter> = z.strictObject({
  every: z.lazy(() => AppointmentWhereInputSchema).optional(),
  some: z.lazy(() => AppointmentWhereInputSchema).optional(),
  none: z.lazy(() => AppointmentWhereInputSchema).optional(),
});

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.strictObject({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional(),
});

export const AppointmentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AppointmentOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const DepartmentCountOrderByAggregateInputSchema: z.ZodType<Prisma.DepartmentCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
});

export const DepartmentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DepartmentMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
});

export const DepartmentMinOrderByAggregateInputSchema: z.ZodType<Prisma.DepartmentMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
});

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
});

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
});

export const PatientListRelationFilterSchema: z.ZodType<Prisma.PatientListRelationFilter> = z.strictObject({
  every: z.lazy(() => PatientWhereInputSchema).optional(),
  some: z.lazy(() => PatientWhereInputSchema).optional(),
  none: z.lazy(() => PatientWhereInputSchema).optional(),
});

export const PatientOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PatientOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const ClientCountOrderByAggregateInputSchema: z.ZodType<Prisma.ClientCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  account_number_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  primary_phone_number: z.lazy(() => SortOrderSchema).optional(),
  is_new_client: z.lazy(() => SortOrderSchema).optional(),
  is_opt_in: z.lazy(() => SortOrderSchema).optional(),
  is_org: z.lazy(() => SortOrderSchema).optional(),
  is_phone_selected: z.lazy(() => SortOrderSchema).optional(),
  is_locked: z.lazy(() => SortOrderSchema).optional(),
  is_guest_account: z.lazy(() => SortOrderSchema).optional(),
});

export const ClientMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ClientMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  account_number_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  primary_phone_number: z.lazy(() => SortOrderSchema).optional(),
  is_new_client: z.lazy(() => SortOrderSchema).optional(),
  is_opt_in: z.lazy(() => SortOrderSchema).optional(),
  is_org: z.lazy(() => SortOrderSchema).optional(),
  is_phone_selected: z.lazy(() => SortOrderSchema).optional(),
  is_locked: z.lazy(() => SortOrderSchema).optional(),
  is_guest_account: z.lazy(() => SortOrderSchema).optional(),
});

export const ClientMinOrderByAggregateInputSchema: z.ZodType<Prisma.ClientMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  account_number_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  primary_phone_number: z.lazy(() => SortOrderSchema).optional(),
  is_new_client: z.lazy(() => SortOrderSchema).optional(),
  is_opt_in: z.lazy(() => SortOrderSchema).optional(),
  is_org: z.lazy(() => SortOrderSchema).optional(),
  is_phone_selected: z.lazy(() => SortOrderSchema).optional(),
  is_locked: z.lazy(() => SortOrderSchema).optional(),
  is_guest_account: z.lazy(() => SortOrderSchema).optional(),
});

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
});

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
});

export const FloatNullableFilterSchema: z.ZodType<Prisma.FloatNullableFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
});

export const ClientNullableRelationFilterSchema: z.ZodType<Prisma.ClientNullableRelationFilter> = z.strictObject({
  is: z.lazy(() => ClientWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ClientWhereInputSchema).optional().nullable(),
});

export const PatientCountOrderByAggregateInputSchema: z.ZodType<Prisma.PatientCountOrderByAggregateInput> = z.strictObject({
  patient_id: z.lazy(() => SortOrderSchema).optional(),
  pet_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  record_number: z.lazy(() => SortOrderSchema).optional(),
  pet_name: z.lazy(() => SortOrderSchema).optional(),
  is_new_patient: z.lazy(() => SortOrderSchema).optional(),
  has_belongings: z.lazy(() => SortOrderSchema).optional(),
  breed: z.lazy(() => SortOrderSchema).optional(),
  species: z.lazy(() => SortOrderSchema).optional(),
  date_of_birth: z.lazy(() => SortOrderSchema).optional(),
  profile_image_url: z.lazy(() => SortOrderSchema).optional(),
  sex_name: z.lazy(() => SortOrderSchema).optional(),
  sterilization: z.lazy(() => SortOrderSchema).optional(),
  last_weight_kgm: z.lazy(() => SortOrderSchema).optional(),
  last_weight_lb: z.lazy(() => SortOrderSchema).optional(),
  alert: z.lazy(() => SortOrderSchema).optional(),
  has_bites_or_scratches: z.lazy(() => SortOrderSchema).optional(),
});

export const PatientAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PatientAvgOrderByAggregateInput> = z.strictObject({
  record_number: z.lazy(() => SortOrderSchema).optional(),
  last_weight_kgm: z.lazy(() => SortOrderSchema).optional(),
  last_weight_lb: z.lazy(() => SortOrderSchema).optional(),
});

export const PatientMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PatientMaxOrderByAggregateInput> = z.strictObject({
  patient_id: z.lazy(() => SortOrderSchema).optional(),
  pet_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  record_number: z.lazy(() => SortOrderSchema).optional(),
  pet_name: z.lazy(() => SortOrderSchema).optional(),
  is_new_patient: z.lazy(() => SortOrderSchema).optional(),
  has_belongings: z.lazy(() => SortOrderSchema).optional(),
  breed: z.lazy(() => SortOrderSchema).optional(),
  species: z.lazy(() => SortOrderSchema).optional(),
  date_of_birth: z.lazy(() => SortOrderSchema).optional(),
  profile_image_url: z.lazy(() => SortOrderSchema).optional(),
  sex_name: z.lazy(() => SortOrderSchema).optional(),
  sterilization: z.lazy(() => SortOrderSchema).optional(),
  last_weight_kgm: z.lazy(() => SortOrderSchema).optional(),
  last_weight_lb: z.lazy(() => SortOrderSchema).optional(),
  alert: z.lazy(() => SortOrderSchema).optional(),
  has_bites_or_scratches: z.lazy(() => SortOrderSchema).optional(),
});

export const PatientMinOrderByAggregateInputSchema: z.ZodType<Prisma.PatientMinOrderByAggregateInput> = z.strictObject({
  patient_id: z.lazy(() => SortOrderSchema).optional(),
  pet_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  record_number: z.lazy(() => SortOrderSchema).optional(),
  pet_name: z.lazy(() => SortOrderSchema).optional(),
  is_new_patient: z.lazy(() => SortOrderSchema).optional(),
  has_belongings: z.lazy(() => SortOrderSchema).optional(),
  breed: z.lazy(() => SortOrderSchema).optional(),
  species: z.lazy(() => SortOrderSchema).optional(),
  date_of_birth: z.lazy(() => SortOrderSchema).optional(),
  profile_image_url: z.lazy(() => SortOrderSchema).optional(),
  sex_name: z.lazy(() => SortOrderSchema).optional(),
  sterilization: z.lazy(() => SortOrderSchema).optional(),
  last_weight_kgm: z.lazy(() => SortOrderSchema).optional(),
  last_weight_lb: z.lazy(() => SortOrderSchema).optional(),
  alert: z.lazy(() => SortOrderSchema).optional(),
  has_bites_or_scratches: z.lazy(() => SortOrderSchema).optional(),
});

export const PatientSumOrderByAggregateInputSchema: z.ZodType<Prisma.PatientSumOrderByAggregateInput> = z.strictObject({
  record_number: z.lazy(() => SortOrderSchema).optional(),
  last_weight_kgm: z.lazy(() => SortOrderSchema).optional(),
  last_weight_lb: z.lazy(() => SortOrderSchema).optional(),
});

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
});

export const FloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.FloatNullableWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
});

export const AppointmentTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentTypeCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color_code: z.lazy(() => SortOrderSchema).optional(),
  bu_appointment_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_type_name: z.lazy(() => SortOrderSchema).optional(),
  sub_type_duration: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentTypeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentTypeAvgOrderByAggregateInput> = z.strictObject({
  sub_type_duration: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentTypeMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color_code: z.lazy(() => SortOrderSchema).optional(),
  bu_appointment_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_type_name: z.lazy(() => SortOrderSchema).optional(),
  sub_type_duration: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentTypeMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color_code: z.lazy(() => SortOrderSchema).optional(),
  bu_appointment_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_type_name: z.lazy(() => SortOrderSchema).optional(),
  sub_type_duration: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentTypeSumOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentTypeSumOrderByAggregateInput> = z.strictObject({
  sub_type_duration: z.lazy(() => SortOrderSchema).optional(),
});

export const DepartmentNullableRelationFilterSchema: z.ZodType<Prisma.DepartmentNullableRelationFilter> = z.strictObject({
  is: z.lazy(() => DepartmentWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => DepartmentWhereInputSchema).optional().nullable(),
});

export const PatientNullableRelationFilterSchema: z.ZodType<Prisma.PatientNullableRelationFilter> = z.strictObject({
  is: z.lazy(() => PatientWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PatientWhereInputSchema).optional().nullable(),
});

export const AppointmentTypeNullableRelationFilterSchema: z.ZodType<Prisma.AppointmentTypeNullableRelationFilter> = z.strictObject({
  is: z.lazy(() => AppointmentTypeWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AppointmentTypeWhereInputSchema).optional().nullable(),
});

export const AppointmentReasonListRelationFilterSchema: z.ZodType<Prisma.AppointmentReasonListRelationFilter> = z.strictObject({
  every: z.lazy(() => AppointmentReasonWhereInputSchema).optional(),
  some: z.lazy(() => AppointmentReasonWhereInputSchema).optional(),
  none: z.lazy(() => AppointmentReasonWhereInputSchema).optional(),
});

export const AppointmentStatusAuditListRelationFilterSchema: z.ZodType<Prisma.AppointmentStatusAuditListRelationFilter> = z.strictObject({
  every: z.lazy(() => AppointmentStatusAuditWhereInputSchema).optional(),
  some: z.lazy(() => AppointmentStatusAuditWhereInputSchema).optional(),
  none: z.lazy(() => AppointmentStatusAuditWhereInputSchema).optional(),
});

export const AppointmentReasonOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AppointmentReasonOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentStatusAuditOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AppointmentStatusAuditOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentCountOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  ouid: z.lazy(() => SortOrderSchema).optional(),
  resource_guid: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  patient_id: z.lazy(() => SortOrderSchema).optional(),
  appointment_type_id: z.lazy(() => SortOrderSchema).optional(),
  is_emergency: z.lazy(() => SortOrderSchema).optional(),
  appointment_date: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_ste: z.lazy(() => SortOrderSchema).optional(),
  created_by: z.lazy(() => SortOrderSchema).optional(),
  created_application_id: z.lazy(() => SortOrderSchema).optional(),
  start_time: z.lazy(() => SortOrderSchema).optional(),
  start_time_ms: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  admission_status_id: z.lazy(() => SortOrderSchema).optional(),
  admission_display_name: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  is_deleted: z.lazy(() => SortOrderSchema).optional(),
  modified_by: z.lazy(() => SortOrderSchema).optional(),
  date_modified: z.lazy(() => SortOrderSchema).optional(),
  is_walkin: z.lazy(() => SortOrderSchema).optional(),
  arrival_ts: z.lazy(() => SortOrderSchema).optional(),
  is_confirmed: z.lazy(() => SortOrderSchema).optional(),
  is_doctor: z.lazy(() => SortOrderSchema).optional(),
  is_real_staff: z.lazy(() => SortOrderSchema).optional(),
  payment_due_warning: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentAvgOrderByAggregateInput> = z.strictObject({
  date_ste: z.lazy(() => SortOrderSchema).optional(),
  start_time_ms: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  ouid: z.lazy(() => SortOrderSchema).optional(),
  resource_guid: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  patient_id: z.lazy(() => SortOrderSchema).optional(),
  appointment_type_id: z.lazy(() => SortOrderSchema).optional(),
  is_emergency: z.lazy(() => SortOrderSchema).optional(),
  appointment_date: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_ste: z.lazy(() => SortOrderSchema).optional(),
  created_by: z.lazy(() => SortOrderSchema).optional(),
  created_application_id: z.lazy(() => SortOrderSchema).optional(),
  start_time: z.lazy(() => SortOrderSchema).optional(),
  start_time_ms: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  admission_status_id: z.lazy(() => SortOrderSchema).optional(),
  admission_display_name: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  is_deleted: z.lazy(() => SortOrderSchema).optional(),
  modified_by: z.lazy(() => SortOrderSchema).optional(),
  date_modified: z.lazy(() => SortOrderSchema).optional(),
  is_walkin: z.lazy(() => SortOrderSchema).optional(),
  arrival_ts: z.lazy(() => SortOrderSchema).optional(),
  is_confirmed: z.lazy(() => SortOrderSchema).optional(),
  is_doctor: z.lazy(() => SortOrderSchema).optional(),
  is_real_staff: z.lazy(() => SortOrderSchema).optional(),
  payment_due_warning: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentMinOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  ouid: z.lazy(() => SortOrderSchema).optional(),
  resource_guid: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  patient_id: z.lazy(() => SortOrderSchema).optional(),
  appointment_type_id: z.lazy(() => SortOrderSchema).optional(),
  is_emergency: z.lazy(() => SortOrderSchema).optional(),
  appointment_date: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_ste: z.lazy(() => SortOrderSchema).optional(),
  created_by: z.lazy(() => SortOrderSchema).optional(),
  created_application_id: z.lazy(() => SortOrderSchema).optional(),
  start_time: z.lazy(() => SortOrderSchema).optional(),
  start_time_ms: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  admission_status_id: z.lazy(() => SortOrderSchema).optional(),
  admission_display_name: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  is_deleted: z.lazy(() => SortOrderSchema).optional(),
  modified_by: z.lazy(() => SortOrderSchema).optional(),
  date_modified: z.lazy(() => SortOrderSchema).optional(),
  is_walkin: z.lazy(() => SortOrderSchema).optional(),
  arrival_ts: z.lazy(() => SortOrderSchema).optional(),
  is_confirmed: z.lazy(() => SortOrderSchema).optional(),
  is_doctor: z.lazy(() => SortOrderSchema).optional(),
  is_real_staff: z.lazy(() => SortOrderSchema).optional(),
  payment_due_warning: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentSumOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentSumOrderByAggregateInput> = z.strictObject({
  date_ste: z.lazy(() => SortOrderSchema).optional(),
  start_time_ms: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentRelationFilterSchema: z.ZodType<Prisma.AppointmentRelationFilter> = z.strictObject({
  is: z.lazy(() => AppointmentWhereInputSchema).optional(),
  isNot: z.lazy(() => AppointmentWhereInputSchema).optional(),
});

export const AppointmentReasonAppointment_idReason_idCompoundUniqueInputSchema: z.ZodType<Prisma.AppointmentReasonAppointment_idReason_idCompoundUniqueInput> = z.strictObject({
  appointment_id: z.string(),
  reason_id: z.string(),
});

export const AppointmentReasonCountOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentReasonCountOrderByAggregateInput> = z.strictObject({
  appointment_id: z.lazy(() => SortOrderSchema).optional(),
  reason_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentReasonMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentReasonMaxOrderByAggregateInput> = z.strictObject({
  appointment_id: z.lazy(() => SortOrderSchema).optional(),
  reason_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentReasonMinOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentReasonMinOrderByAggregateInput> = z.strictObject({
  appointment_id: z.lazy(() => SortOrderSchema).optional(),
  reason_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
});

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
});

export const AppointmentStatusAuditCountOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentStatusAuditCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  appointment_id: z.lazy(() => SortOrderSchema).optional(),
  time_stamp: z.lazy(() => SortOrderSchema).optional(),
  status_changed_to: z.lazy(() => SortOrderSchema).optional(),
  changed_by_user_id: z.lazy(() => SortOrderSchema).optional(),
  application_id: z.lazy(() => SortOrderSchema).optional(),
  resource_id: z.lazy(() => SortOrderSchema).optional(),
  resource_name: z.lazy(() => SortOrderSchema).optional(),
  appointment_date_time: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentStatusAuditAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentStatusAuditAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentStatusAuditMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentStatusAuditMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  appointment_id: z.lazy(() => SortOrderSchema).optional(),
  time_stamp: z.lazy(() => SortOrderSchema).optional(),
  status_changed_to: z.lazy(() => SortOrderSchema).optional(),
  changed_by_user_id: z.lazy(() => SortOrderSchema).optional(),
  application_id: z.lazy(() => SortOrderSchema).optional(),
  resource_id: z.lazy(() => SortOrderSchema).optional(),
  resource_name: z.lazy(() => SortOrderSchema).optional(),
  appointment_date_time: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentStatusAuditMinOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentStatusAuditMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  appointment_id: z.lazy(() => SortOrderSchema).optional(),
  time_stamp: z.lazy(() => SortOrderSchema).optional(),
  status_changed_to: z.lazy(() => SortOrderSchema).optional(),
  changed_by_user_id: z.lazy(() => SortOrderSchema).optional(),
  application_id: z.lazy(() => SortOrderSchema).optional(),
  resource_id: z.lazy(() => SortOrderSchema).optional(),
  resource_name: z.lazy(() => SortOrderSchema).optional(),
  appointment_date_time: z.lazy(() => SortOrderSchema).optional(),
});

export const AppointmentStatusAuditSumOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentStatusAuditSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional(),
});

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
});

export const FileProcessingRecordCountOrderByAggregateInputSchema: z.ZodType<Prisma.FileProcessingRecordCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  file_name: z.lazy(() => SortOrderSchema).optional(),
  process_time: z.lazy(() => SortOrderSchema).optional(),
  file_size_bytes: z.lazy(() => SortOrderSchema).optional(),
  total_time_ms: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  error_message: z.lazy(() => SortOrderSchema).optional(),
});

export const FileProcessingRecordAvgOrderByAggregateInputSchema: z.ZodType<Prisma.FileProcessingRecordAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  file_size_bytes: z.lazy(() => SortOrderSchema).optional(),
  total_time_ms: z.lazy(() => SortOrderSchema).optional(),
});

export const FileProcessingRecordMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FileProcessingRecordMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  file_name: z.lazy(() => SortOrderSchema).optional(),
  process_time: z.lazy(() => SortOrderSchema).optional(),
  file_size_bytes: z.lazy(() => SortOrderSchema).optional(),
  total_time_ms: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  error_message: z.lazy(() => SortOrderSchema).optional(),
});

export const FileProcessingRecordMinOrderByAggregateInputSchema: z.ZodType<Prisma.FileProcessingRecordMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  file_name: z.lazy(() => SortOrderSchema).optional(),
  process_time: z.lazy(() => SortOrderSchema).optional(),
  file_size_bytes: z.lazy(() => SortOrderSchema).optional(),
  total_time_ms: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  error_message: z.lazy(() => SortOrderSchema).optional(),
});

export const FileProcessingRecordSumOrderByAggregateInputSchema: z.ZodType<Prisma.FileProcessingRecordSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  file_size_bytes: z.lazy(() => SortOrderSchema).optional(),
  total_time_ms: z.lazy(() => SortOrderSchema).optional(),
});

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional(),
});

export const AppointmentCreateNestedManyWithoutDepartmentInputSchema: z.ZodType<Prisma.AppointmentCreateNestedManyWithoutDepartmentInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutDepartmentInputSchema), z.lazy(() => AppointmentCreateWithoutDepartmentInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutDepartmentInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutDepartmentInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyDepartmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
});

export const AppointmentUncheckedCreateNestedManyWithoutDepartmentInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateNestedManyWithoutDepartmentInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutDepartmentInputSchema), z.lazy(() => AppointmentCreateWithoutDepartmentInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutDepartmentInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutDepartmentInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyDepartmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
});

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.strictObject({
  set: z.string().optional(),
});

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.strictObject({
  set: z.string().optional().nullable(),
});

export const AppointmentUpdateManyWithoutDepartmentNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithoutDepartmentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutDepartmentInputSchema), z.lazy(() => AppointmentCreateWithoutDepartmentInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutDepartmentInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutDepartmentInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutDepartmentInputSchema), z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyDepartmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutDepartmentInputSchema), z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutDepartmentInputSchema), z.lazy(() => AppointmentUpdateManyWithWhereWithoutDepartmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema), z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
});

export const AppointmentUncheckedUpdateManyWithoutDepartmentNestedInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutDepartmentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutDepartmentInputSchema), z.lazy(() => AppointmentCreateWithoutDepartmentInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutDepartmentInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutDepartmentInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutDepartmentInputSchema), z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyDepartmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutDepartmentInputSchema), z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutDepartmentInputSchema), z.lazy(() => AppointmentUpdateManyWithWhereWithoutDepartmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema), z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
});

export const PatientCreateNestedManyWithoutClientInputSchema: z.ZodType<Prisma.PatientCreateNestedManyWithoutClientInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientCreateWithoutClientInputSchema), z.lazy(() => PatientCreateWithoutClientInputSchema).array(), z.lazy(() => PatientUncheckedCreateWithoutClientInputSchema), z.lazy(() => PatientUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PatientCreateOrConnectWithoutClientInputSchema), z.lazy(() => PatientCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PatientCreateManyClientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PatientWhereUniqueInputSchema), z.lazy(() => PatientWhereUniqueInputSchema).array() ]).optional(),
});

export const AppointmentCreateNestedManyWithoutClientInputSchema: z.ZodType<Prisma.AppointmentCreateNestedManyWithoutClientInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutClientInputSchema), z.lazy(() => AppointmentCreateWithoutClientInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyClientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
});

export const PatientUncheckedCreateNestedManyWithoutClientInputSchema: z.ZodType<Prisma.PatientUncheckedCreateNestedManyWithoutClientInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientCreateWithoutClientInputSchema), z.lazy(() => PatientCreateWithoutClientInputSchema).array(), z.lazy(() => PatientUncheckedCreateWithoutClientInputSchema), z.lazy(() => PatientUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PatientCreateOrConnectWithoutClientInputSchema), z.lazy(() => PatientCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PatientCreateManyClientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PatientWhereUniqueInputSchema), z.lazy(() => PatientWhereUniqueInputSchema).array() ]).optional(),
});

export const AppointmentUncheckedCreateNestedManyWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateNestedManyWithoutClientInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutClientInputSchema), z.lazy(() => AppointmentCreateWithoutClientInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyClientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
});

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.strictObject({
  set: z.boolean().optional(),
});

export const PatientUpdateManyWithoutClientNestedInputSchema: z.ZodType<Prisma.PatientUpdateManyWithoutClientNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientCreateWithoutClientInputSchema), z.lazy(() => PatientCreateWithoutClientInputSchema).array(), z.lazy(() => PatientUncheckedCreateWithoutClientInputSchema), z.lazy(() => PatientUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PatientCreateOrConnectWithoutClientInputSchema), z.lazy(() => PatientCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PatientUpsertWithWhereUniqueWithoutClientInputSchema), z.lazy(() => PatientUpsertWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PatientCreateManyClientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PatientWhereUniqueInputSchema), z.lazy(() => PatientWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PatientWhereUniqueInputSchema), z.lazy(() => PatientWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PatientWhereUniqueInputSchema), z.lazy(() => PatientWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PatientWhereUniqueInputSchema), z.lazy(() => PatientWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PatientUpdateWithWhereUniqueWithoutClientInputSchema), z.lazy(() => PatientUpdateWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PatientUpdateManyWithWhereWithoutClientInputSchema), z.lazy(() => PatientUpdateManyWithWhereWithoutClientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PatientScalarWhereInputSchema), z.lazy(() => PatientScalarWhereInputSchema).array() ]).optional(),
});

export const AppointmentUpdateManyWithoutClientNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithoutClientNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutClientInputSchema), z.lazy(() => AppointmentCreateWithoutClientInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutClientInputSchema), z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyClientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutClientInputSchema), z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutClientInputSchema), z.lazy(() => AppointmentUpdateManyWithWhereWithoutClientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema), z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
});

export const PatientUncheckedUpdateManyWithoutClientNestedInputSchema: z.ZodType<Prisma.PatientUncheckedUpdateManyWithoutClientNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientCreateWithoutClientInputSchema), z.lazy(() => PatientCreateWithoutClientInputSchema).array(), z.lazy(() => PatientUncheckedCreateWithoutClientInputSchema), z.lazy(() => PatientUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PatientCreateOrConnectWithoutClientInputSchema), z.lazy(() => PatientCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PatientUpsertWithWhereUniqueWithoutClientInputSchema), z.lazy(() => PatientUpsertWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PatientCreateManyClientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PatientWhereUniqueInputSchema), z.lazy(() => PatientWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PatientWhereUniqueInputSchema), z.lazy(() => PatientWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PatientWhereUniqueInputSchema), z.lazy(() => PatientWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PatientWhereUniqueInputSchema), z.lazy(() => PatientWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PatientUpdateWithWhereUniqueWithoutClientInputSchema), z.lazy(() => PatientUpdateWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PatientUpdateManyWithWhereWithoutClientInputSchema), z.lazy(() => PatientUpdateManyWithWhereWithoutClientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PatientScalarWhereInputSchema), z.lazy(() => PatientScalarWhereInputSchema).array() ]).optional(),
});

export const AppointmentUncheckedUpdateManyWithoutClientNestedInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutClientNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutClientInputSchema), z.lazy(() => AppointmentCreateWithoutClientInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutClientInputSchema), z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyClientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutClientInputSchema), z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutClientInputSchema), z.lazy(() => AppointmentUpdateManyWithWhereWithoutClientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema), z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
});

export const ClientCreateNestedOneWithoutPatientsInputSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutPatientsInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClientCreateWithoutPatientsInputSchema), z.lazy(() => ClientUncheckedCreateWithoutPatientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutPatientsInputSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputSchema).optional(),
});

export const AppointmentCreateNestedManyWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentCreateNestedManyWithoutPatientInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutPatientInputSchema), z.lazy(() => AppointmentCreateWithoutPatientInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyPatientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
});

export const AppointmentUncheckedCreateNestedManyWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateNestedManyWithoutPatientInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutPatientInputSchema), z.lazy(() => AppointmentCreateWithoutPatientInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyPatientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
});

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.strictObject({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
});

export const NullableFloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput> = z.strictObject({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
});

export const ClientUpdateOneWithoutPatientsNestedInputSchema: z.ZodType<Prisma.ClientUpdateOneWithoutPatientsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClientCreateWithoutPatientsInputSchema), z.lazy(() => ClientUncheckedCreateWithoutPatientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutPatientsInputSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutPatientsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ClientWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ClientWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClientUpdateToOneWithWhereWithoutPatientsInputSchema), z.lazy(() => ClientUpdateWithoutPatientsInputSchema), z.lazy(() => ClientUncheckedUpdateWithoutPatientsInputSchema) ]).optional(),
});

export const AppointmentUpdateManyWithoutPatientNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithoutPatientNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutPatientInputSchema), z.lazy(() => AppointmentCreateWithoutPatientInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutPatientInputSchema), z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutPatientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyPatientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutPatientInputSchema), z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutPatientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutPatientInputSchema), z.lazy(() => AppointmentUpdateManyWithWhereWithoutPatientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema), z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
});

export const AppointmentUncheckedUpdateManyWithoutPatientNestedInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutPatientNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutPatientInputSchema), z.lazy(() => AppointmentCreateWithoutPatientInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutPatientInputSchema), z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutPatientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyPatientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutPatientInputSchema), z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutPatientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutPatientInputSchema), z.lazy(() => AppointmentUpdateManyWithWhereWithoutPatientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema), z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
});

export const AppointmentCreateNestedManyWithoutAppointmentTypeInputSchema: z.ZodType<Prisma.AppointmentCreateNestedManyWithoutAppointmentTypeInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentCreateWithoutAppointmentTypeInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutAppointmentTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutAppointmentTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyAppointmentTypeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
});

export const AppointmentUncheckedCreateNestedManyWithoutAppointmentTypeInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateNestedManyWithoutAppointmentTypeInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentCreateWithoutAppointmentTypeInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutAppointmentTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutAppointmentTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyAppointmentTypeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
});

export const AppointmentUpdateManyWithoutAppointmentTypeNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithoutAppointmentTypeNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentCreateWithoutAppointmentTypeInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutAppointmentTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutAppointmentTypeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutAppointmentTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyAppointmentTypeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutAppointmentTypeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUpdateManyWithWhereWithoutAppointmentTypeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema), z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
});

export const AppointmentUncheckedUpdateManyWithoutAppointmentTypeNestedInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutAppointmentTypeNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentCreateWithoutAppointmentTypeInputSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutAppointmentTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentCreateOrConnectWithoutAppointmentTypeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutAppointmentTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyAppointmentTypeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema), z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutAppointmentTypeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUpdateManyWithWhereWithoutAppointmentTypeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema), z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
});

export const DepartmentCreateNestedOneWithoutAppointmentsInputSchema: z.ZodType<Prisma.DepartmentCreateNestedOneWithoutAppointmentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutAppointmentsInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
});

export const ClientCreateNestedOneWithoutAppointmentsInputSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutAppointmentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClientCreateWithoutAppointmentsInputSchema), z.lazy(() => ClientUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputSchema).optional(),
});

export const PatientCreateNestedOneWithoutAppointmentsInputSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutAppointmentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientCreateWithoutAppointmentsInputSchema), z.lazy(() => PatientUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
});

export const AppointmentTypeCreateNestedOneWithoutAppointmentsInputSchema: z.ZodType<Prisma.AppointmentTypeCreateNestedOneWithoutAppointmentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentTypeCreateWithoutAppointmentsInputSchema), z.lazy(() => AppointmentTypeUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppointmentTypeCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  connect: z.lazy(() => AppointmentTypeWhereUniqueInputSchema).optional(),
});

export const AppointmentReasonCreateNestedManyWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentReasonCreateNestedManyWithoutAppointmentInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentReasonCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonCreateWithoutAppointmentInputSchema).array(), z.lazy(() => AppointmentReasonUncheckedCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUncheckedCreateWithoutAppointmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentReasonCreateOrConnectWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonCreateOrConnectWithoutAppointmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentReasonCreateManyAppointmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentReasonWhereUniqueInputSchema), z.lazy(() => AppointmentReasonWhereUniqueInputSchema).array() ]).optional(),
});

export const AppointmentStatusAuditCreateNestedManyWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentStatusAuditCreateNestedManyWithoutAppointmentInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentStatusAuditCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditCreateWithoutAppointmentInputSchema).array(), z.lazy(() => AppointmentStatusAuditUncheckedCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUncheckedCreateWithoutAppointmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentStatusAuditCreateOrConnectWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditCreateOrConnectWithoutAppointmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentStatusAuditCreateManyAppointmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema), z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema).array() ]).optional(),
});

export const AppointmentReasonUncheckedCreateNestedManyWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentReasonUncheckedCreateNestedManyWithoutAppointmentInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentReasonCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonCreateWithoutAppointmentInputSchema).array(), z.lazy(() => AppointmentReasonUncheckedCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUncheckedCreateWithoutAppointmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentReasonCreateOrConnectWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonCreateOrConnectWithoutAppointmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentReasonCreateManyAppointmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentReasonWhereUniqueInputSchema), z.lazy(() => AppointmentReasonWhereUniqueInputSchema).array() ]).optional(),
});

export const AppointmentStatusAuditUncheckedCreateNestedManyWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUncheckedCreateNestedManyWithoutAppointmentInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentStatusAuditCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditCreateWithoutAppointmentInputSchema).array(), z.lazy(() => AppointmentStatusAuditUncheckedCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUncheckedCreateWithoutAppointmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentStatusAuditCreateOrConnectWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditCreateOrConnectWithoutAppointmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentStatusAuditCreateManyAppointmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema), z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema).array() ]).optional(),
});

export const DepartmentUpdateOneWithoutAppointmentsNestedInputSchema: z.ZodType<Prisma.DepartmentUpdateOneWithoutAppointmentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutAppointmentsInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutAppointmentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DepartmentUpdateToOneWithWhereWithoutAppointmentsInputSchema), z.lazy(() => DepartmentUpdateWithoutAppointmentsInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutAppointmentsInputSchema) ]).optional(),
});

export const ClientUpdateOneWithoutAppointmentsNestedInputSchema: z.ZodType<Prisma.ClientUpdateOneWithoutAppointmentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClientCreateWithoutAppointmentsInputSchema), z.lazy(() => ClientUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutAppointmentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ClientWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ClientWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClientUpdateToOneWithWhereWithoutAppointmentsInputSchema), z.lazy(() => ClientUpdateWithoutAppointmentsInputSchema), z.lazy(() => ClientUncheckedUpdateWithoutAppointmentsInputSchema) ]).optional(),
});

export const PatientUpdateOneWithoutAppointmentsNestedInputSchema: z.ZodType<Prisma.PatientUpdateOneWithoutAppointmentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientCreateWithoutAppointmentsInputSchema), z.lazy(() => PatientUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  upsert: z.lazy(() => PatientUpsertWithoutAppointmentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PatientWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PatientWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PatientUpdateToOneWithWhereWithoutAppointmentsInputSchema), z.lazy(() => PatientUpdateWithoutAppointmentsInputSchema), z.lazy(() => PatientUncheckedUpdateWithoutAppointmentsInputSchema) ]).optional(),
});

export const AppointmentTypeUpdateOneWithoutAppointmentsNestedInputSchema: z.ZodType<Prisma.AppointmentTypeUpdateOneWithoutAppointmentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentTypeCreateWithoutAppointmentsInputSchema), z.lazy(() => AppointmentTypeUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppointmentTypeCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  upsert: z.lazy(() => AppointmentTypeUpsertWithoutAppointmentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AppointmentTypeWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AppointmentTypeWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AppointmentTypeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AppointmentTypeUpdateToOneWithWhereWithoutAppointmentsInputSchema), z.lazy(() => AppointmentTypeUpdateWithoutAppointmentsInputSchema), z.lazy(() => AppointmentTypeUncheckedUpdateWithoutAppointmentsInputSchema) ]).optional(),
});

export const AppointmentReasonUpdateManyWithoutAppointmentNestedInputSchema: z.ZodType<Prisma.AppointmentReasonUpdateManyWithoutAppointmentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentReasonCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonCreateWithoutAppointmentInputSchema).array(), z.lazy(() => AppointmentReasonUncheckedCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUncheckedCreateWithoutAppointmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentReasonCreateOrConnectWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonCreateOrConnectWithoutAppointmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentReasonUpsertWithWhereUniqueWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUpsertWithWhereUniqueWithoutAppointmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentReasonCreateManyAppointmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentReasonWhereUniqueInputSchema), z.lazy(() => AppointmentReasonWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentReasonWhereUniqueInputSchema), z.lazy(() => AppointmentReasonWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentReasonWhereUniqueInputSchema), z.lazy(() => AppointmentReasonWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentReasonWhereUniqueInputSchema), z.lazy(() => AppointmentReasonWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentReasonUpdateWithWhereUniqueWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUpdateWithWhereUniqueWithoutAppointmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentReasonUpdateManyWithWhereWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUpdateManyWithWhereWithoutAppointmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentReasonScalarWhereInputSchema), z.lazy(() => AppointmentReasonScalarWhereInputSchema).array() ]).optional(),
});

export const AppointmentStatusAuditUpdateManyWithoutAppointmentNestedInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUpdateManyWithoutAppointmentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentStatusAuditCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditCreateWithoutAppointmentInputSchema).array(), z.lazy(() => AppointmentStatusAuditUncheckedCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUncheckedCreateWithoutAppointmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentStatusAuditCreateOrConnectWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditCreateOrConnectWithoutAppointmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentStatusAuditUpsertWithWhereUniqueWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUpsertWithWhereUniqueWithoutAppointmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentStatusAuditCreateManyAppointmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema), z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema), z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema), z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema), z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentStatusAuditUpdateWithWhereUniqueWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUpdateWithWhereUniqueWithoutAppointmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentStatusAuditUpdateManyWithWhereWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUpdateManyWithWhereWithoutAppointmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentStatusAuditScalarWhereInputSchema), z.lazy(() => AppointmentStatusAuditScalarWhereInputSchema).array() ]).optional(),
});

export const AppointmentReasonUncheckedUpdateManyWithoutAppointmentNestedInputSchema: z.ZodType<Prisma.AppointmentReasonUncheckedUpdateManyWithoutAppointmentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentReasonCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonCreateWithoutAppointmentInputSchema).array(), z.lazy(() => AppointmentReasonUncheckedCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUncheckedCreateWithoutAppointmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentReasonCreateOrConnectWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonCreateOrConnectWithoutAppointmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentReasonUpsertWithWhereUniqueWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUpsertWithWhereUniqueWithoutAppointmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentReasonCreateManyAppointmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentReasonWhereUniqueInputSchema), z.lazy(() => AppointmentReasonWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentReasonWhereUniqueInputSchema), z.lazy(() => AppointmentReasonWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentReasonWhereUniqueInputSchema), z.lazy(() => AppointmentReasonWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentReasonWhereUniqueInputSchema), z.lazy(() => AppointmentReasonWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentReasonUpdateWithWhereUniqueWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUpdateWithWhereUniqueWithoutAppointmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentReasonUpdateManyWithWhereWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUpdateManyWithWhereWithoutAppointmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentReasonScalarWhereInputSchema), z.lazy(() => AppointmentReasonScalarWhereInputSchema).array() ]).optional(),
});

export const AppointmentStatusAuditUncheckedUpdateManyWithoutAppointmentNestedInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUncheckedUpdateManyWithoutAppointmentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentStatusAuditCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditCreateWithoutAppointmentInputSchema).array(), z.lazy(() => AppointmentStatusAuditUncheckedCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUncheckedCreateWithoutAppointmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentStatusAuditCreateOrConnectWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditCreateOrConnectWithoutAppointmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentStatusAuditUpsertWithWhereUniqueWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUpsertWithWhereUniqueWithoutAppointmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentStatusAuditCreateManyAppointmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema), z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema), z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema), z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema), z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentStatusAuditUpdateWithWhereUniqueWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUpdateWithWhereUniqueWithoutAppointmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentStatusAuditUpdateManyWithWhereWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUpdateManyWithWhereWithoutAppointmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentStatusAuditScalarWhereInputSchema), z.lazy(() => AppointmentStatusAuditScalarWhereInputSchema).array() ]).optional(),
});

export const AppointmentCreateNestedOneWithoutReasonsInputSchema: z.ZodType<Prisma.AppointmentCreateNestedOneWithoutReasonsInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutReasonsInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutReasonsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutReasonsInputSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputSchema).optional(),
});

export const AppointmentUpdateOneRequiredWithoutReasonsNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateOneRequiredWithoutReasonsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutReasonsInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutReasonsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutReasonsInputSchema).optional(),
  upsert: z.lazy(() => AppointmentUpsertWithoutReasonsInputSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateToOneWithWhereWithoutReasonsInputSchema), z.lazy(() => AppointmentUpdateWithoutReasonsInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutReasonsInputSchema) ]).optional(),
});

export const AppointmentCreateNestedOneWithoutStatusAuditInputSchema: z.ZodType<Prisma.AppointmentCreateNestedOneWithoutStatusAuditInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutStatusAuditInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutStatusAuditInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutStatusAuditInputSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputSchema).optional(),
});

export const AppointmentUpdateOneRequiredWithoutStatusAuditNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateOneRequiredWithoutStatusAuditNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutStatusAuditInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutStatusAuditInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutStatusAuditInputSchema).optional(),
  upsert: z.lazy(() => AppointmentUpsertWithoutStatusAuditInputSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateToOneWithWhereWithoutStatusAuditInputSchema), z.lazy(() => AppointmentUpdateWithoutStatusAuditInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutStatusAuditInputSchema) ]).optional(),
});

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.strictObject({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
});

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.strictObject({
  set: z.coerce.date().optional(),
});

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.strictObject({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
});

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
});

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
});

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
});

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
});

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
});

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
});

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
});

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
});

export const NestedFloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
});

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional(),
});

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
});

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional(),
});

export const AppointmentCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutDepartmentInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Client: z.lazy(() => ClientCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Patient: z.lazy(() => PatientCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  AppointmentType: z.lazy(() => AppointmentTypeCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Reasons: z.lazy(() => AppointmentReasonCreateNestedManyWithoutAppointmentInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentUncheckedCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateWithoutDepartmentInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  client_id: z.string().optional().nullable(),
  patient_id: z.string().optional().nullable(),
  appointment_type_id: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Reasons: z.lazy(() => AppointmentReasonUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentCreateOrConnectWithoutDepartmentInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutDepartmentInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutDepartmentInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutDepartmentInputSchema) ]),
});

export const AppointmentCreateManyDepartmentInputEnvelopeSchema: z.ZodType<Prisma.AppointmentCreateManyDepartmentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AppointmentCreateManyDepartmentInputSchema), z.lazy(() => AppointmentCreateManyDepartmentInputSchema).array() ]),
});

export const AppointmentUpsertWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutDepartmentInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppointmentUpdateWithoutDepartmentInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutDepartmentInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutDepartmentInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutDepartmentInputSchema) ]),
});

export const AppointmentUpdateWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutDepartmentInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateWithoutDepartmentInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutDepartmentInputSchema) ]),
});

export const AppointmentUpdateManyWithWhereWithoutDepartmentInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutDepartmentInput> = z.strictObject({
  where: z.lazy(() => AppointmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateManyMutationInputSchema), z.lazy(() => AppointmentUncheckedUpdateManyWithoutDepartmentInputSchema) ]),
});

export const AppointmentScalarWhereInputSchema: z.ZodType<Prisma.AppointmentScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema), z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema), z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  ouid: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  resource_guid: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  department_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  client_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patient_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  appointment_type_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_emergency: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  appointment_date: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  date_created: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  date_ste: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  created_by: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  created_application_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  start_time: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  start_time_ms: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  duration: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  admission_status_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  admission_display_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  status_id: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_deleted: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  modified_by: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  date_modified: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_walkin: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  arrival_ts: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_confirmed: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_doctor: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  is_real_staff: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  payment_due_warning: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
});

export const PatientCreateWithoutClientInputSchema: z.ZodType<Prisma.PatientCreateWithoutClientInput> = z.strictObject({
  patient_id: z.string(),
  pet_id: z.string(),
  record_number: z.number().int().optional().nullable(),
  pet_name: z.string().optional().nullable(),
  is_new_patient: z.boolean().optional(),
  has_belongings: z.boolean().optional(),
  breed: z.string().optional().nullable(),
  species: z.string().optional().nullable(),
  date_of_birth: z.string().optional().nullable(),
  profile_image_url: z.string().optional().nullable(),
  sex_name: z.string().optional().nullable(),
  sterilization: z.string().optional().nullable(),
  last_weight_kgm: z.number().optional().nullable(),
  last_weight_lb: z.number().optional().nullable(),
  alert: z.string().optional().nullable(),
  has_bites_or_scratches: z.boolean().optional(),
  Appointments: z.lazy(() => AppointmentCreateNestedManyWithoutPatientInputSchema).optional(),
});

export const PatientUncheckedCreateWithoutClientInputSchema: z.ZodType<Prisma.PatientUncheckedCreateWithoutClientInput> = z.strictObject({
  patient_id: z.string(),
  pet_id: z.string(),
  record_number: z.number().int().optional().nullable(),
  pet_name: z.string().optional().nullable(),
  is_new_patient: z.boolean().optional(),
  has_belongings: z.boolean().optional(),
  breed: z.string().optional().nullable(),
  species: z.string().optional().nullable(),
  date_of_birth: z.string().optional().nullable(),
  profile_image_url: z.string().optional().nullable(),
  sex_name: z.string().optional().nullable(),
  sterilization: z.string().optional().nullable(),
  last_weight_kgm: z.number().optional().nullable(),
  last_weight_lb: z.number().optional().nullable(),
  alert: z.string().optional().nullable(),
  has_bites_or_scratches: z.boolean().optional(),
  Appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutPatientInputSchema).optional(),
});

export const PatientCreateOrConnectWithoutClientInputSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutClientInput> = z.strictObject({
  where: z.lazy(() => PatientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PatientCreateWithoutClientInputSchema), z.lazy(() => PatientUncheckedCreateWithoutClientInputSchema) ]),
});

export const PatientCreateManyClientInputEnvelopeSchema: z.ZodType<Prisma.PatientCreateManyClientInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => PatientCreateManyClientInputSchema), z.lazy(() => PatientCreateManyClientInputSchema).array() ]),
});

export const AppointmentCreateWithoutClientInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutClientInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Department: z.lazy(() => DepartmentCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Patient: z.lazy(() => PatientCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  AppointmentType: z.lazy(() => AppointmentTypeCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Reasons: z.lazy(() => AppointmentReasonCreateNestedManyWithoutAppointmentInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentUncheckedCreateWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateWithoutClientInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  department_id: z.string().optional().nullable(),
  patient_id: z.string().optional().nullable(),
  appointment_type_id: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Reasons: z.lazy(() => AppointmentReasonUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentCreateOrConnectWithoutClientInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutClientInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutClientInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema) ]),
});

export const AppointmentCreateManyClientInputEnvelopeSchema: z.ZodType<Prisma.AppointmentCreateManyClientInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AppointmentCreateManyClientInputSchema), z.lazy(() => AppointmentCreateManyClientInputSchema).array() ]),
});

export const PatientUpsertWithWhereUniqueWithoutClientInputSchema: z.ZodType<Prisma.PatientUpsertWithWhereUniqueWithoutClientInput> = z.strictObject({
  where: z.lazy(() => PatientWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PatientUpdateWithoutClientInputSchema), z.lazy(() => PatientUncheckedUpdateWithoutClientInputSchema) ]),
  create: z.union([ z.lazy(() => PatientCreateWithoutClientInputSchema), z.lazy(() => PatientUncheckedCreateWithoutClientInputSchema) ]),
});

export const PatientUpdateWithWhereUniqueWithoutClientInputSchema: z.ZodType<Prisma.PatientUpdateWithWhereUniqueWithoutClientInput> = z.strictObject({
  where: z.lazy(() => PatientWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PatientUpdateWithoutClientInputSchema), z.lazy(() => PatientUncheckedUpdateWithoutClientInputSchema) ]),
});

export const PatientUpdateManyWithWhereWithoutClientInputSchema: z.ZodType<Prisma.PatientUpdateManyWithWhereWithoutClientInput> = z.strictObject({
  where: z.lazy(() => PatientScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PatientUpdateManyMutationInputSchema), z.lazy(() => PatientUncheckedUpdateManyWithoutClientInputSchema) ]),
});

export const PatientScalarWhereInputSchema: z.ZodType<Prisma.PatientScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => PatientScalarWhereInputSchema), z.lazy(() => PatientScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PatientScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PatientScalarWhereInputSchema), z.lazy(() => PatientScalarWhereInputSchema).array() ]).optional(),
  patient_id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  pet_id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  client_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  record_number: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  pet_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  is_new_patient: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  has_belongings: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  breed: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  species: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  date_of_birth: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  profile_image_url: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sex_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sterilization: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  last_weight_kgm: z.union([ z.lazy(() => FloatNullableFilterSchema), z.number() ]).optional().nullable(),
  last_weight_lb: z.union([ z.lazy(() => FloatNullableFilterSchema), z.number() ]).optional().nullable(),
  alert: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  has_bites_or_scratches: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
});

export const AppointmentUpsertWithWhereUniqueWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutClientInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppointmentUpdateWithoutClientInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutClientInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutClientInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema) ]),
});

export const AppointmentUpdateWithWhereUniqueWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutClientInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateWithoutClientInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutClientInputSchema) ]),
});

export const AppointmentUpdateManyWithWhereWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutClientInput> = z.strictObject({
  where: z.lazy(() => AppointmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateManyMutationInputSchema), z.lazy(() => AppointmentUncheckedUpdateManyWithoutClientInputSchema) ]),
});

export const ClientCreateWithoutPatientsInputSchema: z.ZodType<Prisma.ClientCreateWithoutPatientsInput> = z.strictObject({
  id: z.string(),
  account_number_id: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  primary_phone_number: z.string().optional().nullable(),
  is_new_client: z.boolean().optional(),
  is_opt_in: z.boolean().optional(),
  is_org: z.boolean().optional(),
  is_phone_selected: z.boolean().optional(),
  is_locked: z.boolean().optional(),
  is_guest_account: z.boolean().optional(),
  Appointments: z.lazy(() => AppointmentCreateNestedManyWithoutClientInputSchema).optional(),
});

export const ClientUncheckedCreateWithoutPatientsInputSchema: z.ZodType<Prisma.ClientUncheckedCreateWithoutPatientsInput> = z.strictObject({
  id: z.string(),
  account_number_id: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  primary_phone_number: z.string().optional().nullable(),
  is_new_client: z.boolean().optional(),
  is_opt_in: z.boolean().optional(),
  is_org: z.boolean().optional(),
  is_phone_selected: z.boolean().optional(),
  is_locked: z.boolean().optional(),
  is_guest_account: z.boolean().optional(),
  Appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
});

export const ClientCreateOrConnectWithoutPatientsInputSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutPatientsInput> = z.strictObject({
  where: z.lazy(() => ClientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClientCreateWithoutPatientsInputSchema), z.lazy(() => ClientUncheckedCreateWithoutPatientsInputSchema) ]),
});

export const AppointmentCreateWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutPatientInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Department: z.lazy(() => DepartmentCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Client: z.lazy(() => ClientCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  AppointmentType: z.lazy(() => AppointmentTypeCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Reasons: z.lazy(() => AppointmentReasonCreateNestedManyWithoutAppointmentInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentUncheckedCreateWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateWithoutPatientInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  department_id: z.string().optional().nullable(),
  client_id: z.string().optional().nullable(),
  appointment_type_id: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Reasons: z.lazy(() => AppointmentReasonUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentCreateOrConnectWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutPatientInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutPatientInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema) ]),
});

export const AppointmentCreateManyPatientInputEnvelopeSchema: z.ZodType<Prisma.AppointmentCreateManyPatientInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AppointmentCreateManyPatientInputSchema), z.lazy(() => AppointmentCreateManyPatientInputSchema).array() ]),
});

export const ClientUpsertWithoutPatientsInputSchema: z.ZodType<Prisma.ClientUpsertWithoutPatientsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ClientUpdateWithoutPatientsInputSchema), z.lazy(() => ClientUncheckedUpdateWithoutPatientsInputSchema) ]),
  create: z.union([ z.lazy(() => ClientCreateWithoutPatientsInputSchema), z.lazy(() => ClientUncheckedCreateWithoutPatientsInputSchema) ]),
  where: z.lazy(() => ClientWhereInputSchema).optional(),
});

export const ClientUpdateToOneWithWhereWithoutPatientsInputSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutPatientsInput> = z.strictObject({
  where: z.lazy(() => ClientWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClientUpdateWithoutPatientsInputSchema), z.lazy(() => ClientUncheckedUpdateWithoutPatientsInputSchema) ]),
});

export const ClientUpdateWithoutPatientsInputSchema: z.ZodType<Prisma.ClientUpdateWithoutPatientsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_number_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_phone_number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_client: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_opt_in: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_org: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_phone_selected: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_locked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_guest_account: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Appointments: z.lazy(() => AppointmentUpdateManyWithoutClientNestedInputSchema).optional(),
});

export const ClientUncheckedUpdateWithoutPatientsInputSchema: z.ZodType<Prisma.ClientUncheckedUpdateWithoutPatientsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_number_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_phone_number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_client: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_opt_in: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_org: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_phone_selected: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_locked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_guest_account: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
});

export const AppointmentUpsertWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutPatientInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppointmentUpdateWithoutPatientInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutPatientInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutPatientInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema) ]),
});

export const AppointmentUpdateWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutPatientInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateWithoutPatientInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutPatientInputSchema) ]),
});

export const AppointmentUpdateManyWithWhereWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutPatientInput> = z.strictObject({
  where: z.lazy(() => AppointmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateManyMutationInputSchema), z.lazy(() => AppointmentUncheckedUpdateManyWithoutPatientInputSchema) ]),
});

export const AppointmentCreateWithoutAppointmentTypeInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutAppointmentTypeInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Department: z.lazy(() => DepartmentCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Client: z.lazy(() => ClientCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Patient: z.lazy(() => PatientCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Reasons: z.lazy(() => AppointmentReasonCreateNestedManyWithoutAppointmentInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentUncheckedCreateWithoutAppointmentTypeInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateWithoutAppointmentTypeInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  department_id: z.string().optional().nullable(),
  client_id: z.string().optional().nullable(),
  patient_id: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Reasons: z.lazy(() => AppointmentReasonUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentCreateOrConnectWithoutAppointmentTypeInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutAppointmentTypeInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutAppointmentTypeInputSchema) ]),
});

export const AppointmentCreateManyAppointmentTypeInputEnvelopeSchema: z.ZodType<Prisma.AppointmentCreateManyAppointmentTypeInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AppointmentCreateManyAppointmentTypeInputSchema), z.lazy(() => AppointmentCreateManyAppointmentTypeInputSchema).array() ]),
});

export const AppointmentUpsertWithWhereUniqueWithoutAppointmentTypeInputSchema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutAppointmentTypeInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppointmentUpdateWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutAppointmentTypeInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutAppointmentTypeInputSchema) ]),
});

export const AppointmentUpdateWithWhereUniqueWithoutAppointmentTypeInputSchema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutAppointmentTypeInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateWithoutAppointmentTypeInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutAppointmentTypeInputSchema) ]),
});

export const AppointmentUpdateManyWithWhereWithoutAppointmentTypeInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutAppointmentTypeInput> = z.strictObject({
  where: z.lazy(() => AppointmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateManyMutationInputSchema), z.lazy(() => AppointmentUncheckedUpdateManyWithoutAppointmentTypeInputSchema) ]),
});

export const DepartmentCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.DepartmentCreateWithoutAppointmentsInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  language: z.string().optional().nullable(),
});

export const DepartmentUncheckedCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutAppointmentsInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  language: z.string().optional().nullable(),
});

export const DepartmentCreateOrConnectWithoutAppointmentsInputSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutAppointmentsInput> = z.strictObject({
  where: z.lazy(() => DepartmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutAppointmentsInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutAppointmentsInputSchema) ]),
});

export const ClientCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.ClientCreateWithoutAppointmentsInput> = z.strictObject({
  id: z.string(),
  account_number_id: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  primary_phone_number: z.string().optional().nullable(),
  is_new_client: z.boolean().optional(),
  is_opt_in: z.boolean().optional(),
  is_org: z.boolean().optional(),
  is_phone_selected: z.boolean().optional(),
  is_locked: z.boolean().optional(),
  is_guest_account: z.boolean().optional(),
  Patients: z.lazy(() => PatientCreateNestedManyWithoutClientInputSchema).optional(),
});

export const ClientUncheckedCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.ClientUncheckedCreateWithoutAppointmentsInput> = z.strictObject({
  id: z.string(),
  account_number_id: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  primary_phone_number: z.string().optional().nullable(),
  is_new_client: z.boolean().optional(),
  is_opt_in: z.boolean().optional(),
  is_org: z.boolean().optional(),
  is_phone_selected: z.boolean().optional(),
  is_locked: z.boolean().optional(),
  is_guest_account: z.boolean().optional(),
  Patients: z.lazy(() => PatientUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
});

export const ClientCreateOrConnectWithoutAppointmentsInputSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutAppointmentsInput> = z.strictObject({
  where: z.lazy(() => ClientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClientCreateWithoutAppointmentsInputSchema), z.lazy(() => ClientUncheckedCreateWithoutAppointmentsInputSchema) ]),
});

export const PatientCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.PatientCreateWithoutAppointmentsInput> = z.strictObject({
  patient_id: z.string(),
  pet_id: z.string(),
  record_number: z.number().int().optional().nullable(),
  pet_name: z.string().optional().nullable(),
  is_new_patient: z.boolean().optional(),
  has_belongings: z.boolean().optional(),
  breed: z.string().optional().nullable(),
  species: z.string().optional().nullable(),
  date_of_birth: z.string().optional().nullable(),
  profile_image_url: z.string().optional().nullable(),
  sex_name: z.string().optional().nullable(),
  sterilization: z.string().optional().nullable(),
  last_weight_kgm: z.number().optional().nullable(),
  last_weight_lb: z.number().optional().nullable(),
  alert: z.string().optional().nullable(),
  has_bites_or_scratches: z.boolean().optional(),
  Client: z.lazy(() => ClientCreateNestedOneWithoutPatientsInputSchema).optional(),
});

export const PatientUncheckedCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.PatientUncheckedCreateWithoutAppointmentsInput> = z.strictObject({
  patient_id: z.string(),
  pet_id: z.string(),
  client_id: z.string().optional().nullable(),
  record_number: z.number().int().optional().nullable(),
  pet_name: z.string().optional().nullable(),
  is_new_patient: z.boolean().optional(),
  has_belongings: z.boolean().optional(),
  breed: z.string().optional().nullable(),
  species: z.string().optional().nullable(),
  date_of_birth: z.string().optional().nullable(),
  profile_image_url: z.string().optional().nullable(),
  sex_name: z.string().optional().nullable(),
  sterilization: z.string().optional().nullable(),
  last_weight_kgm: z.number().optional().nullable(),
  last_weight_lb: z.number().optional().nullable(),
  alert: z.string().optional().nullable(),
  has_bites_or_scratches: z.boolean().optional(),
});

export const PatientCreateOrConnectWithoutAppointmentsInputSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutAppointmentsInput> = z.strictObject({
  where: z.lazy(() => PatientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PatientCreateWithoutAppointmentsInputSchema), z.lazy(() => PatientUncheckedCreateWithoutAppointmentsInputSchema) ]),
});

export const AppointmentTypeCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.AppointmentTypeCreateWithoutAppointmentsInput> = z.strictObject({
  id: z.string(),
  name: z.string().optional().nullable(),
  color_code: z.string().optional().nullable(),
  bu_appointment_type_id: z.string().optional().nullable(),
  sub_type_id: z.string().optional().nullable(),
  sub_type_name: z.string().optional().nullable(),
  sub_type_duration: z.number().int().optional().nullable(),
});

export const AppointmentTypeUncheckedCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.AppointmentTypeUncheckedCreateWithoutAppointmentsInput> = z.strictObject({
  id: z.string(),
  name: z.string().optional().nullable(),
  color_code: z.string().optional().nullable(),
  bu_appointment_type_id: z.string().optional().nullable(),
  sub_type_id: z.string().optional().nullable(),
  sub_type_name: z.string().optional().nullable(),
  sub_type_duration: z.number().int().optional().nullable(),
});

export const AppointmentTypeCreateOrConnectWithoutAppointmentsInputSchema: z.ZodType<Prisma.AppointmentTypeCreateOrConnectWithoutAppointmentsInput> = z.strictObject({
  where: z.lazy(() => AppointmentTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentTypeCreateWithoutAppointmentsInputSchema), z.lazy(() => AppointmentTypeUncheckedCreateWithoutAppointmentsInputSchema) ]),
});

export const AppointmentReasonCreateWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentReasonCreateWithoutAppointmentInput> = z.strictObject({
  reason_id: z.string(),
  name: z.string().optional().nullable(),
});

export const AppointmentReasonUncheckedCreateWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentReasonUncheckedCreateWithoutAppointmentInput> = z.strictObject({
  reason_id: z.string(),
  name: z.string().optional().nullable(),
});

export const AppointmentReasonCreateOrConnectWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentReasonCreateOrConnectWithoutAppointmentInput> = z.strictObject({
  where: z.lazy(() => AppointmentReasonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentReasonCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUncheckedCreateWithoutAppointmentInputSchema) ]),
});

export const AppointmentReasonCreateManyAppointmentInputEnvelopeSchema: z.ZodType<Prisma.AppointmentReasonCreateManyAppointmentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AppointmentReasonCreateManyAppointmentInputSchema), z.lazy(() => AppointmentReasonCreateManyAppointmentInputSchema).array() ]),
});

export const AppointmentStatusAuditCreateWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentStatusAuditCreateWithoutAppointmentInput> = z.strictObject({
  time_stamp: z.string(),
  status_changed_to: z.string().optional().nullable(),
  changed_by_user_id: z.string().optional().nullable(),
  application_id: z.string().optional().nullable(),
  resource_id: z.string().optional().nullable(),
  resource_name: z.string().optional().nullable(),
  appointment_date_time: z.string().optional().nullable(),
});

export const AppointmentStatusAuditUncheckedCreateWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUncheckedCreateWithoutAppointmentInput> = z.strictObject({
  id: z.number().int().optional(),
  time_stamp: z.string(),
  status_changed_to: z.string().optional().nullable(),
  changed_by_user_id: z.string().optional().nullable(),
  application_id: z.string().optional().nullable(),
  resource_id: z.string().optional().nullable(),
  resource_name: z.string().optional().nullable(),
  appointment_date_time: z.string().optional().nullable(),
});

export const AppointmentStatusAuditCreateOrConnectWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentStatusAuditCreateOrConnectWithoutAppointmentInput> = z.strictObject({
  where: z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentStatusAuditCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUncheckedCreateWithoutAppointmentInputSchema) ]),
});

export const AppointmentStatusAuditCreateManyAppointmentInputEnvelopeSchema: z.ZodType<Prisma.AppointmentStatusAuditCreateManyAppointmentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AppointmentStatusAuditCreateManyAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditCreateManyAppointmentInputSchema).array() ]),
});

export const DepartmentUpsertWithoutAppointmentsInputSchema: z.ZodType<Prisma.DepartmentUpsertWithoutAppointmentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => DepartmentUpdateWithoutAppointmentsInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutAppointmentsInputSchema) ]),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutAppointmentsInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutAppointmentsInputSchema) ]),
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
});

export const DepartmentUpdateToOneWithWhereWithoutAppointmentsInputSchema: z.ZodType<Prisma.DepartmentUpdateToOneWithWhereWithoutAppointmentsInput> = z.strictObject({
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DepartmentUpdateWithoutAppointmentsInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutAppointmentsInputSchema) ]),
});

export const DepartmentUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.DepartmentUpdateWithoutAppointmentsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const DepartmentUncheckedUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateWithoutAppointmentsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const ClientUpsertWithoutAppointmentsInputSchema: z.ZodType<Prisma.ClientUpsertWithoutAppointmentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ClientUpdateWithoutAppointmentsInputSchema), z.lazy(() => ClientUncheckedUpdateWithoutAppointmentsInputSchema) ]),
  create: z.union([ z.lazy(() => ClientCreateWithoutAppointmentsInputSchema), z.lazy(() => ClientUncheckedCreateWithoutAppointmentsInputSchema) ]),
  where: z.lazy(() => ClientWhereInputSchema).optional(),
});

export const ClientUpdateToOneWithWhereWithoutAppointmentsInputSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutAppointmentsInput> = z.strictObject({
  where: z.lazy(() => ClientWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClientUpdateWithoutAppointmentsInputSchema), z.lazy(() => ClientUncheckedUpdateWithoutAppointmentsInputSchema) ]),
});

export const ClientUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.ClientUpdateWithoutAppointmentsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_number_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_phone_number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_client: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_opt_in: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_org: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_phone_selected: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_locked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_guest_account: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Patients: z.lazy(() => PatientUpdateManyWithoutClientNestedInputSchema).optional(),
});

export const ClientUncheckedUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.ClientUncheckedUpdateWithoutAppointmentsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_number_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_phone_number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_client: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_opt_in: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_org: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_phone_selected: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_locked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_guest_account: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Patients: z.lazy(() => PatientUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
});

export const PatientUpsertWithoutAppointmentsInputSchema: z.ZodType<Prisma.PatientUpsertWithoutAppointmentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => PatientUpdateWithoutAppointmentsInputSchema), z.lazy(() => PatientUncheckedUpdateWithoutAppointmentsInputSchema) ]),
  create: z.union([ z.lazy(() => PatientCreateWithoutAppointmentsInputSchema), z.lazy(() => PatientUncheckedCreateWithoutAppointmentsInputSchema) ]),
  where: z.lazy(() => PatientWhereInputSchema).optional(),
});

export const PatientUpdateToOneWithWhereWithoutAppointmentsInputSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutAppointmentsInput> = z.strictObject({
  where: z.lazy(() => PatientWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PatientUpdateWithoutAppointmentsInputSchema), z.lazy(() => PatientUncheckedUpdateWithoutAppointmentsInputSchema) ]),
});

export const PatientUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.PatientUpdateWithoutAppointmentsInput> = z.strictObject({
  patient_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  record_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pet_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_patient: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  has_belongings: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  species: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_of_birth: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profile_image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sex_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sterilization: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_kgm: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_lb: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alert: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_bites_or_scratches: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Client: z.lazy(() => ClientUpdateOneWithoutPatientsNestedInputSchema).optional(),
});

export const PatientUncheckedUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.PatientUncheckedUpdateWithoutAppointmentsInput> = z.strictObject({
  patient_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  client_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  record_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pet_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_patient: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  has_belongings: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  species: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_of_birth: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profile_image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sex_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sterilization: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_kgm: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_lb: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alert: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_bites_or_scratches: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AppointmentTypeUpsertWithoutAppointmentsInputSchema: z.ZodType<Prisma.AppointmentTypeUpsertWithoutAppointmentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => AppointmentTypeUpdateWithoutAppointmentsInputSchema), z.lazy(() => AppointmentTypeUncheckedUpdateWithoutAppointmentsInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentTypeCreateWithoutAppointmentsInputSchema), z.lazy(() => AppointmentTypeUncheckedCreateWithoutAppointmentsInputSchema) ]),
  where: z.lazy(() => AppointmentTypeWhereInputSchema).optional(),
});

export const AppointmentTypeUpdateToOneWithWhereWithoutAppointmentsInputSchema: z.ZodType<Prisma.AppointmentTypeUpdateToOneWithWhereWithoutAppointmentsInput> = z.strictObject({
  where: z.lazy(() => AppointmentTypeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AppointmentTypeUpdateWithoutAppointmentsInputSchema), z.lazy(() => AppointmentTypeUncheckedUpdateWithoutAppointmentsInputSchema) ]),
});

export const AppointmentTypeUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.AppointmentTypeUpdateWithoutAppointmentsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color_code: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bu_appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentTypeUncheckedUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.AppointmentTypeUncheckedUpdateWithoutAppointmentsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color_code: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bu_appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sub_type_duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentReasonUpsertWithWhereUniqueWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentReasonUpsertWithWhereUniqueWithoutAppointmentInput> = z.strictObject({
  where: z.lazy(() => AppointmentReasonWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppointmentReasonUpdateWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUncheckedUpdateWithoutAppointmentInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentReasonCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUncheckedCreateWithoutAppointmentInputSchema) ]),
});

export const AppointmentReasonUpdateWithWhereUniqueWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentReasonUpdateWithWhereUniqueWithoutAppointmentInput> = z.strictObject({
  where: z.lazy(() => AppointmentReasonWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppointmentReasonUpdateWithoutAppointmentInputSchema), z.lazy(() => AppointmentReasonUncheckedUpdateWithoutAppointmentInputSchema) ]),
});

export const AppointmentReasonUpdateManyWithWhereWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentReasonUpdateManyWithWhereWithoutAppointmentInput> = z.strictObject({
  where: z.lazy(() => AppointmentReasonScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppointmentReasonUpdateManyMutationInputSchema), z.lazy(() => AppointmentReasonUncheckedUpdateManyWithoutAppointmentInputSchema) ]),
});

export const AppointmentReasonScalarWhereInputSchema: z.ZodType<Prisma.AppointmentReasonScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AppointmentReasonScalarWhereInputSchema), z.lazy(() => AppointmentReasonScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentReasonScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentReasonScalarWhereInputSchema), z.lazy(() => AppointmentReasonScalarWhereInputSchema).array() ]).optional(),
  appointment_id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  reason_id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
});

export const AppointmentStatusAuditUpsertWithWhereUniqueWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUpsertWithWhereUniqueWithoutAppointmentInput> = z.strictObject({
  where: z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppointmentStatusAuditUpdateWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUncheckedUpdateWithoutAppointmentInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentStatusAuditCreateWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUncheckedCreateWithoutAppointmentInputSchema) ]),
});

export const AppointmentStatusAuditUpdateWithWhereUniqueWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUpdateWithWhereUniqueWithoutAppointmentInput> = z.strictObject({
  where: z.lazy(() => AppointmentStatusAuditWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppointmentStatusAuditUpdateWithoutAppointmentInputSchema), z.lazy(() => AppointmentStatusAuditUncheckedUpdateWithoutAppointmentInputSchema) ]),
});

export const AppointmentStatusAuditUpdateManyWithWhereWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUpdateManyWithWhereWithoutAppointmentInput> = z.strictObject({
  where: z.lazy(() => AppointmentStatusAuditScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppointmentStatusAuditUpdateManyMutationInputSchema), z.lazy(() => AppointmentStatusAuditUncheckedUpdateManyWithoutAppointmentInputSchema) ]),
});

export const AppointmentStatusAuditScalarWhereInputSchema: z.ZodType<Prisma.AppointmentStatusAuditScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AppointmentStatusAuditScalarWhereInputSchema), z.lazy(() => AppointmentStatusAuditScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentStatusAuditScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentStatusAuditScalarWhereInputSchema), z.lazy(() => AppointmentStatusAuditScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  appointment_id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  time_stamp: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  status_changed_to: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  changed_by_user_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  application_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  resource_id: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  resource_name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  appointment_date_time: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
});

export const AppointmentCreateWithoutReasonsInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutReasonsInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Department: z.lazy(() => DepartmentCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Client: z.lazy(() => ClientCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Patient: z.lazy(() => PatientCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  AppointmentType: z.lazy(() => AppointmentTypeCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentUncheckedCreateWithoutReasonsInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateWithoutReasonsInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  department_id: z.string().optional().nullable(),
  client_id: z.string().optional().nullable(),
  patient_id: z.string().optional().nullable(),
  appointment_type_id: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentCreateOrConnectWithoutReasonsInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutReasonsInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutReasonsInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutReasonsInputSchema) ]),
});

export const AppointmentUpsertWithoutReasonsInputSchema: z.ZodType<Prisma.AppointmentUpsertWithoutReasonsInput> = z.strictObject({
  update: z.union([ z.lazy(() => AppointmentUpdateWithoutReasonsInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutReasonsInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutReasonsInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutReasonsInputSchema) ]),
  where: z.lazy(() => AppointmentWhereInputSchema).optional(),
});

export const AppointmentUpdateToOneWithWhereWithoutReasonsInputSchema: z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutReasonsInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AppointmentUpdateWithoutReasonsInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutReasonsInputSchema) ]),
});

export const AppointmentUpdateWithoutReasonsInputSchema: z.ZodType<Prisma.AppointmentUpdateWithoutReasonsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Department: z.lazy(() => DepartmentUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Client: z.lazy(() => ClientUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Patient: z.lazy(() => PatientUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  AppointmentType: z.lazy(() => AppointmentTypeUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentUncheckedUpdateWithoutReasonsInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateWithoutReasonsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  department_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patient_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentCreateWithoutStatusAuditInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutStatusAuditInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Department: z.lazy(() => DepartmentCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Client: z.lazy(() => ClientCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Patient: z.lazy(() => PatientCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  AppointmentType: z.lazy(() => AppointmentTypeCreateNestedOneWithoutAppointmentsInputSchema).optional(),
  Reasons: z.lazy(() => AppointmentReasonCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentUncheckedCreateWithoutStatusAuditInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateWithoutStatusAuditInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  department_id: z.string().optional().nullable(),
  client_id: z.string().optional().nullable(),
  patient_id: z.string().optional().nullable(),
  appointment_type_id: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
  Reasons: z.lazy(() => AppointmentReasonUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional(),
});

export const AppointmentCreateOrConnectWithoutStatusAuditInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutStatusAuditInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutStatusAuditInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutStatusAuditInputSchema) ]),
});

export const AppointmentUpsertWithoutStatusAuditInputSchema: z.ZodType<Prisma.AppointmentUpsertWithoutStatusAuditInput> = z.strictObject({
  update: z.union([ z.lazy(() => AppointmentUpdateWithoutStatusAuditInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutStatusAuditInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutStatusAuditInputSchema), z.lazy(() => AppointmentUncheckedCreateWithoutStatusAuditInputSchema) ]),
  where: z.lazy(() => AppointmentWhereInputSchema).optional(),
});

export const AppointmentUpdateToOneWithWhereWithoutStatusAuditInputSchema: z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutStatusAuditInput> = z.strictObject({
  where: z.lazy(() => AppointmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AppointmentUpdateWithoutStatusAuditInputSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutStatusAuditInputSchema) ]),
});

export const AppointmentUpdateWithoutStatusAuditInputSchema: z.ZodType<Prisma.AppointmentUpdateWithoutStatusAuditInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Department: z.lazy(() => DepartmentUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Client: z.lazy(() => ClientUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Patient: z.lazy(() => PatientUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  AppointmentType: z.lazy(() => AppointmentTypeUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Reasons: z.lazy(() => AppointmentReasonUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentUncheckedUpdateWithoutStatusAuditInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateWithoutStatusAuditInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  department_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patient_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Reasons: z.lazy(() => AppointmentReasonUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentCreateManyDepartmentInputSchema: z.ZodType<Prisma.AppointmentCreateManyDepartmentInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  client_id: z.string().optional().nullable(),
  patient_id: z.string().optional().nullable(),
  appointment_type_id: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
});

export const AppointmentUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.AppointmentUpdateWithoutDepartmentInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Client: z.lazy(() => ClientUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Patient: z.lazy(() => PatientUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  AppointmentType: z.lazy(() => AppointmentTypeUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Reasons: z.lazy(() => AppointmentReasonUpdateManyWithoutAppointmentNestedInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentUncheckedUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateWithoutDepartmentInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patient_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Reasons: z.lazy(() => AppointmentReasonUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentUncheckedUpdateManyWithoutDepartmentInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutDepartmentInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patient_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PatientCreateManyClientInputSchema: z.ZodType<Prisma.PatientCreateManyClientInput> = z.strictObject({
  patient_id: z.string(),
  pet_id: z.string(),
  record_number: z.number().int().optional().nullable(),
  pet_name: z.string().optional().nullable(),
  is_new_patient: z.boolean().optional(),
  has_belongings: z.boolean().optional(),
  breed: z.string().optional().nullable(),
  species: z.string().optional().nullable(),
  date_of_birth: z.string().optional().nullable(),
  profile_image_url: z.string().optional().nullable(),
  sex_name: z.string().optional().nullable(),
  sterilization: z.string().optional().nullable(),
  last_weight_kgm: z.number().optional().nullable(),
  last_weight_lb: z.number().optional().nullable(),
  alert: z.string().optional().nullable(),
  has_bites_or_scratches: z.boolean().optional(),
});

export const AppointmentCreateManyClientInputSchema: z.ZodType<Prisma.AppointmentCreateManyClientInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  department_id: z.string().optional().nullable(),
  patient_id: z.string().optional().nullable(),
  appointment_type_id: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
});

export const PatientUpdateWithoutClientInputSchema: z.ZodType<Prisma.PatientUpdateWithoutClientInput> = z.strictObject({
  patient_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  record_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pet_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_patient: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  has_belongings: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  species: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_of_birth: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profile_image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sex_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sterilization: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_kgm: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_lb: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alert: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_bites_or_scratches: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Appointments: z.lazy(() => AppointmentUpdateManyWithoutPatientNestedInputSchema).optional(),
});

export const PatientUncheckedUpdateWithoutClientInputSchema: z.ZodType<Prisma.PatientUncheckedUpdateWithoutClientInput> = z.strictObject({
  patient_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  record_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pet_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_patient: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  has_belongings: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  species: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_of_birth: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profile_image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sex_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sterilization: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_kgm: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_lb: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alert: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_bites_or_scratches: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutPatientNestedInputSchema).optional(),
});

export const PatientUncheckedUpdateManyWithoutClientInputSchema: z.ZodType<Prisma.PatientUncheckedUpdateManyWithoutClientInput> = z.strictObject({
  patient_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  record_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pet_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_new_patient: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  has_belongings: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  species: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_of_birth: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profile_image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sex_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sterilization: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_kgm: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_weight_lb: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alert: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_bites_or_scratches: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AppointmentUpdateWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUpdateWithoutClientInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Department: z.lazy(() => DepartmentUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Patient: z.lazy(() => PatientUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  AppointmentType: z.lazy(() => AppointmentTypeUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Reasons: z.lazy(() => AppointmentReasonUpdateManyWithoutAppointmentNestedInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentUncheckedUpdateWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateWithoutClientInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  department_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patient_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Reasons: z.lazy(() => AppointmentReasonUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentUncheckedUpdateManyWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutClientInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  department_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patient_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AppointmentCreateManyPatientInputSchema: z.ZodType<Prisma.AppointmentCreateManyPatientInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  department_id: z.string().optional().nullable(),
  client_id: z.string().optional().nullable(),
  appointment_type_id: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
});

export const AppointmentUpdateWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentUpdateWithoutPatientInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Department: z.lazy(() => DepartmentUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Client: z.lazy(() => ClientUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  AppointmentType: z.lazy(() => AppointmentTypeUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Reasons: z.lazy(() => AppointmentReasonUpdateManyWithoutAppointmentNestedInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentUncheckedUpdateWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateWithoutPatientInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  department_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Reasons: z.lazy(() => AppointmentReasonUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentUncheckedUpdateManyWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutPatientInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  department_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AppointmentCreateManyAppointmentTypeInputSchema: z.ZodType<Prisma.AppointmentCreateManyAppointmentTypeInput> = z.strictObject({
  id: z.string(),
  ouid: z.string().optional().nullable(),
  resource_guid: z.string().optional().nullable(),
  department_id: z.string().optional().nullable(),
  client_id: z.string().optional().nullable(),
  patient_id: z.string().optional().nullable(),
  is_emergency: z.boolean().optional(),
  appointment_date: z.string().optional().nullable(),
  date_created: z.string().optional().nullable(),
  date_ste: z.number().int().optional().nullable(),
  created_by: z.string().optional().nullable(),
  created_application_id: z.string().optional().nullable(),
  start_time: z.string().optional().nullable(),
  start_time_ms: z.number().int().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  admission_status_id: z.string().optional().nullable(),
  admission_display_name: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  is_deleted: z.boolean().optional(),
  modified_by: z.string().optional().nullable(),
  date_modified: z.string().optional().nullable(),
  is_walkin: z.boolean().optional(),
  arrival_ts: z.string().optional().nullable(),
  is_confirmed: z.boolean().optional(),
  is_doctor: z.boolean().optional(),
  is_real_staff: z.boolean().optional(),
  payment_due_warning: z.boolean().optional(),
});

export const AppointmentUpdateWithoutAppointmentTypeInputSchema: z.ZodType<Prisma.AppointmentUpdateWithoutAppointmentTypeInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Department: z.lazy(() => DepartmentUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Client: z.lazy(() => ClientUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Patient: z.lazy(() => PatientUpdateOneWithoutAppointmentsNestedInputSchema).optional(),
  Reasons: z.lazy(() => AppointmentReasonUpdateManyWithoutAppointmentNestedInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentUncheckedUpdateWithoutAppointmentTypeInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateWithoutAppointmentTypeInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  department_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patient_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Reasons: z.lazy(() => AppointmentReasonUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional(),
  StatusAudit: z.lazy(() => AppointmentStatusAuditUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional(),
});

export const AppointmentUncheckedUpdateManyWithoutAppointmentTypeInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutAppointmentTypeInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ouid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_guid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  department_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patient_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_emergency: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  appointment_date: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_created: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_ste: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  start_time_ms: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_status_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admission_display_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  modified_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_modified: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_walkin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  arrival_ts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_confirmed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_doctor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  is_real_staff: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  payment_due_warning: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AppointmentReasonCreateManyAppointmentInputSchema: z.ZodType<Prisma.AppointmentReasonCreateManyAppointmentInput> = z.strictObject({
  reason_id: z.string(),
  name: z.string().optional().nullable(),
});

export const AppointmentStatusAuditCreateManyAppointmentInputSchema: z.ZodType<Prisma.AppointmentStatusAuditCreateManyAppointmentInput> = z.strictObject({
  id: z.number().int().optional(),
  time_stamp: z.string(),
  status_changed_to: z.string().optional().nullable(),
  changed_by_user_id: z.string().optional().nullable(),
  application_id: z.string().optional().nullable(),
  resource_id: z.string().optional().nullable(),
  resource_name: z.string().optional().nullable(),
  appointment_date_time: z.string().optional().nullable(),
});

export const AppointmentReasonUpdateWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentReasonUpdateWithoutAppointmentInput> = z.strictObject({
  reason_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentReasonUncheckedUpdateWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentReasonUncheckedUpdateWithoutAppointmentInput> = z.strictObject({
  reason_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentReasonUncheckedUpdateManyWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentReasonUncheckedUpdateManyWithoutAppointmentInput> = z.strictObject({
  reason_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentStatusAuditUpdateWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUpdateWithoutAppointmentInput> = z.strictObject({
  time_stamp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status_changed_to: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  changed_by_user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_date_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentStatusAuditUncheckedUpdateWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUncheckedUpdateWithoutAppointmentInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  time_stamp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status_changed_to: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  changed_by_user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_date_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AppointmentStatusAuditUncheckedUpdateManyWithoutAppointmentInputSchema: z.ZodType<Prisma.AppointmentStatusAuditUncheckedUpdateManyWithoutAppointmentInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  time_stamp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status_changed_to: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  changed_by_user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  application_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resource_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appointment_date_time: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const DepartmentFindFirstArgsSchema: z.ZodType<Prisma.DepartmentFindFirstArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereInputSchema.optional(), 
  orderBy: z.union([ DepartmentOrderByWithRelationInputSchema.array(), DepartmentOrderByWithRelationInputSchema ]).optional(),
  cursor: DepartmentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DepartmentScalarFieldEnumSchema, DepartmentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const DepartmentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DepartmentFindFirstOrThrowArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereInputSchema.optional(), 
  orderBy: z.union([ DepartmentOrderByWithRelationInputSchema.array(), DepartmentOrderByWithRelationInputSchema ]).optional(),
  cursor: DepartmentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DepartmentScalarFieldEnumSchema, DepartmentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const DepartmentFindManyArgsSchema: z.ZodType<Prisma.DepartmentFindManyArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereInputSchema.optional(), 
  orderBy: z.union([ DepartmentOrderByWithRelationInputSchema.array(), DepartmentOrderByWithRelationInputSchema ]).optional(),
  cursor: DepartmentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DepartmentScalarFieldEnumSchema, DepartmentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const DepartmentAggregateArgsSchema: z.ZodType<Prisma.DepartmentAggregateArgs> = z.object({
  where: DepartmentWhereInputSchema.optional(), 
  orderBy: z.union([ DepartmentOrderByWithRelationInputSchema.array(), DepartmentOrderByWithRelationInputSchema ]).optional(),
  cursor: DepartmentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const DepartmentGroupByArgsSchema: z.ZodType<Prisma.DepartmentGroupByArgs> = z.object({
  where: DepartmentWhereInputSchema.optional(), 
  orderBy: z.union([ DepartmentOrderByWithAggregationInputSchema.array(), DepartmentOrderByWithAggregationInputSchema ]).optional(),
  by: DepartmentScalarFieldEnumSchema.array(), 
  having: DepartmentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const DepartmentFindUniqueArgsSchema: z.ZodType<Prisma.DepartmentFindUniqueArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereUniqueInputSchema, 
}).strict();

export const DepartmentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DepartmentFindUniqueOrThrowArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereUniqueInputSchema, 
}).strict();

export const ClientFindFirstArgsSchema: z.ZodType<Prisma.ClientFindFirstArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereInputSchema.optional(), 
  orderBy: z.union([ ClientOrderByWithRelationInputSchema.array(), ClientOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientScalarFieldEnumSchema, ClientScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ClientFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ClientFindFirstOrThrowArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereInputSchema.optional(), 
  orderBy: z.union([ ClientOrderByWithRelationInputSchema.array(), ClientOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientScalarFieldEnumSchema, ClientScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ClientFindManyArgsSchema: z.ZodType<Prisma.ClientFindManyArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereInputSchema.optional(), 
  orderBy: z.union([ ClientOrderByWithRelationInputSchema.array(), ClientOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientScalarFieldEnumSchema, ClientScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ClientAggregateArgsSchema: z.ZodType<Prisma.ClientAggregateArgs> = z.object({
  where: ClientWhereInputSchema.optional(), 
  orderBy: z.union([ ClientOrderByWithRelationInputSchema.array(), ClientOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ClientGroupByArgsSchema: z.ZodType<Prisma.ClientGroupByArgs> = z.object({
  where: ClientWhereInputSchema.optional(), 
  orderBy: z.union([ ClientOrderByWithAggregationInputSchema.array(), ClientOrderByWithAggregationInputSchema ]).optional(),
  by: ClientScalarFieldEnumSchema.array(), 
  having: ClientScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ClientFindUniqueArgsSchema: z.ZodType<Prisma.ClientFindUniqueArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereUniqueInputSchema, 
}).strict();

export const ClientFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ClientFindUniqueOrThrowArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereUniqueInputSchema, 
}).strict();

export const PatientFindFirstArgsSchema: z.ZodType<Prisma.PatientFindFirstArgs> = z.object({
  select: PatientSelectSchema.optional(),
  include: PatientIncludeSchema.optional(),
  where: PatientWhereInputSchema.optional(), 
  orderBy: z.union([ PatientOrderByWithRelationInputSchema.array(), PatientOrderByWithRelationInputSchema ]).optional(),
  cursor: PatientWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PatientScalarFieldEnumSchema, PatientScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const PatientFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PatientFindFirstOrThrowArgs> = z.object({
  select: PatientSelectSchema.optional(),
  include: PatientIncludeSchema.optional(),
  where: PatientWhereInputSchema.optional(), 
  orderBy: z.union([ PatientOrderByWithRelationInputSchema.array(), PatientOrderByWithRelationInputSchema ]).optional(),
  cursor: PatientWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PatientScalarFieldEnumSchema, PatientScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const PatientFindManyArgsSchema: z.ZodType<Prisma.PatientFindManyArgs> = z.object({
  select: PatientSelectSchema.optional(),
  include: PatientIncludeSchema.optional(),
  where: PatientWhereInputSchema.optional(), 
  orderBy: z.union([ PatientOrderByWithRelationInputSchema.array(), PatientOrderByWithRelationInputSchema ]).optional(),
  cursor: PatientWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PatientScalarFieldEnumSchema, PatientScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const PatientAggregateArgsSchema: z.ZodType<Prisma.PatientAggregateArgs> = z.object({
  where: PatientWhereInputSchema.optional(), 
  orderBy: z.union([ PatientOrderByWithRelationInputSchema.array(), PatientOrderByWithRelationInputSchema ]).optional(),
  cursor: PatientWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PatientGroupByArgsSchema: z.ZodType<Prisma.PatientGroupByArgs> = z.object({
  where: PatientWhereInputSchema.optional(), 
  orderBy: z.union([ PatientOrderByWithAggregationInputSchema.array(), PatientOrderByWithAggregationInputSchema ]).optional(),
  by: PatientScalarFieldEnumSchema.array(), 
  having: PatientScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PatientFindUniqueArgsSchema: z.ZodType<Prisma.PatientFindUniqueArgs> = z.object({
  select: PatientSelectSchema.optional(),
  include: PatientIncludeSchema.optional(),
  where: PatientWhereUniqueInputSchema, 
}).strict();

export const PatientFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PatientFindUniqueOrThrowArgs> = z.object({
  select: PatientSelectSchema.optional(),
  include: PatientIncludeSchema.optional(),
  where: PatientWhereUniqueInputSchema, 
}).strict();

export const AppointmentTypeFindFirstArgsSchema: z.ZodType<Prisma.AppointmentTypeFindFirstArgs> = z.object({
  select: AppointmentTypeSelectSchema.optional(),
  include: AppointmentTypeIncludeSchema.optional(),
  where: AppointmentTypeWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentTypeOrderByWithRelationInputSchema.array(), AppointmentTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentTypeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentTypeScalarFieldEnumSchema, AppointmentTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AppointmentTypeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AppointmentTypeFindFirstOrThrowArgs> = z.object({
  select: AppointmentTypeSelectSchema.optional(),
  include: AppointmentTypeIncludeSchema.optional(),
  where: AppointmentTypeWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentTypeOrderByWithRelationInputSchema.array(), AppointmentTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentTypeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentTypeScalarFieldEnumSchema, AppointmentTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AppointmentTypeFindManyArgsSchema: z.ZodType<Prisma.AppointmentTypeFindManyArgs> = z.object({
  select: AppointmentTypeSelectSchema.optional(),
  include: AppointmentTypeIncludeSchema.optional(),
  where: AppointmentTypeWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentTypeOrderByWithRelationInputSchema.array(), AppointmentTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentTypeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentTypeScalarFieldEnumSchema, AppointmentTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AppointmentTypeAggregateArgsSchema: z.ZodType<Prisma.AppointmentTypeAggregateArgs> = z.object({
  where: AppointmentTypeWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentTypeOrderByWithRelationInputSchema.array(), AppointmentTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentTypeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AppointmentTypeGroupByArgsSchema: z.ZodType<Prisma.AppointmentTypeGroupByArgs> = z.object({
  where: AppointmentTypeWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentTypeOrderByWithAggregationInputSchema.array(), AppointmentTypeOrderByWithAggregationInputSchema ]).optional(),
  by: AppointmentTypeScalarFieldEnumSchema.array(), 
  having: AppointmentTypeScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AppointmentTypeFindUniqueArgsSchema: z.ZodType<Prisma.AppointmentTypeFindUniqueArgs> = z.object({
  select: AppointmentTypeSelectSchema.optional(),
  include: AppointmentTypeIncludeSchema.optional(),
  where: AppointmentTypeWhereUniqueInputSchema, 
}).strict();

export const AppointmentTypeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AppointmentTypeFindUniqueOrThrowArgs> = z.object({
  select: AppointmentTypeSelectSchema.optional(),
  include: AppointmentTypeIncludeSchema.optional(),
  where: AppointmentTypeWhereUniqueInputSchema, 
}).strict();

export const AppointmentFindFirstArgsSchema: z.ZodType<Prisma.AppointmentFindFirstArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentOrderByWithRelationInputSchema.array(), AppointmentOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentScalarFieldEnumSchema, AppointmentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AppointmentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AppointmentFindFirstOrThrowArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentOrderByWithRelationInputSchema.array(), AppointmentOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentScalarFieldEnumSchema, AppointmentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AppointmentFindManyArgsSchema: z.ZodType<Prisma.AppointmentFindManyArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentOrderByWithRelationInputSchema.array(), AppointmentOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentScalarFieldEnumSchema, AppointmentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AppointmentAggregateArgsSchema: z.ZodType<Prisma.AppointmentAggregateArgs> = z.object({
  where: AppointmentWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentOrderByWithRelationInputSchema.array(), AppointmentOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AppointmentGroupByArgsSchema: z.ZodType<Prisma.AppointmentGroupByArgs> = z.object({
  where: AppointmentWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentOrderByWithAggregationInputSchema.array(), AppointmentOrderByWithAggregationInputSchema ]).optional(),
  by: AppointmentScalarFieldEnumSchema.array(), 
  having: AppointmentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AppointmentFindUniqueArgsSchema: z.ZodType<Prisma.AppointmentFindUniqueArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereUniqueInputSchema, 
}).strict();

export const AppointmentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AppointmentFindUniqueOrThrowArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereUniqueInputSchema, 
}).strict();

export const AppointmentReasonFindFirstArgsSchema: z.ZodType<Prisma.AppointmentReasonFindFirstArgs> = z.object({
  select: AppointmentReasonSelectSchema.optional(),
  include: AppointmentReasonIncludeSchema.optional(),
  where: AppointmentReasonWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentReasonOrderByWithRelationInputSchema.array(), AppointmentReasonOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentReasonWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentReasonScalarFieldEnumSchema, AppointmentReasonScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AppointmentReasonFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AppointmentReasonFindFirstOrThrowArgs> = z.object({
  select: AppointmentReasonSelectSchema.optional(),
  include: AppointmentReasonIncludeSchema.optional(),
  where: AppointmentReasonWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentReasonOrderByWithRelationInputSchema.array(), AppointmentReasonOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentReasonWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentReasonScalarFieldEnumSchema, AppointmentReasonScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AppointmentReasonFindManyArgsSchema: z.ZodType<Prisma.AppointmentReasonFindManyArgs> = z.object({
  select: AppointmentReasonSelectSchema.optional(),
  include: AppointmentReasonIncludeSchema.optional(),
  where: AppointmentReasonWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentReasonOrderByWithRelationInputSchema.array(), AppointmentReasonOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentReasonWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentReasonScalarFieldEnumSchema, AppointmentReasonScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AppointmentReasonAggregateArgsSchema: z.ZodType<Prisma.AppointmentReasonAggregateArgs> = z.object({
  where: AppointmentReasonWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentReasonOrderByWithRelationInputSchema.array(), AppointmentReasonOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentReasonWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AppointmentReasonGroupByArgsSchema: z.ZodType<Prisma.AppointmentReasonGroupByArgs> = z.object({
  where: AppointmentReasonWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentReasonOrderByWithAggregationInputSchema.array(), AppointmentReasonOrderByWithAggregationInputSchema ]).optional(),
  by: AppointmentReasonScalarFieldEnumSchema.array(), 
  having: AppointmentReasonScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AppointmentReasonFindUniqueArgsSchema: z.ZodType<Prisma.AppointmentReasonFindUniqueArgs> = z.object({
  select: AppointmentReasonSelectSchema.optional(),
  include: AppointmentReasonIncludeSchema.optional(),
  where: AppointmentReasonWhereUniqueInputSchema, 
}).strict();

export const AppointmentReasonFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AppointmentReasonFindUniqueOrThrowArgs> = z.object({
  select: AppointmentReasonSelectSchema.optional(),
  include: AppointmentReasonIncludeSchema.optional(),
  where: AppointmentReasonWhereUniqueInputSchema, 
}).strict();

export const AppointmentStatusAuditFindFirstArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditFindFirstArgs> = z.object({
  select: AppointmentStatusAuditSelectSchema.optional(),
  include: AppointmentStatusAuditIncludeSchema.optional(),
  where: AppointmentStatusAuditWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentStatusAuditOrderByWithRelationInputSchema.array(), AppointmentStatusAuditOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentStatusAuditWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentStatusAuditScalarFieldEnumSchema, AppointmentStatusAuditScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AppointmentStatusAuditFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditFindFirstOrThrowArgs> = z.object({
  select: AppointmentStatusAuditSelectSchema.optional(),
  include: AppointmentStatusAuditIncludeSchema.optional(),
  where: AppointmentStatusAuditWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentStatusAuditOrderByWithRelationInputSchema.array(), AppointmentStatusAuditOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentStatusAuditWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentStatusAuditScalarFieldEnumSchema, AppointmentStatusAuditScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AppointmentStatusAuditFindManyArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditFindManyArgs> = z.object({
  select: AppointmentStatusAuditSelectSchema.optional(),
  include: AppointmentStatusAuditIncludeSchema.optional(),
  where: AppointmentStatusAuditWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentStatusAuditOrderByWithRelationInputSchema.array(), AppointmentStatusAuditOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentStatusAuditWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentStatusAuditScalarFieldEnumSchema, AppointmentStatusAuditScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AppointmentStatusAuditAggregateArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditAggregateArgs> = z.object({
  where: AppointmentStatusAuditWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentStatusAuditOrderByWithRelationInputSchema.array(), AppointmentStatusAuditOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentStatusAuditWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AppointmentStatusAuditGroupByArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditGroupByArgs> = z.object({
  where: AppointmentStatusAuditWhereInputSchema.optional(), 
  orderBy: z.union([ AppointmentStatusAuditOrderByWithAggregationInputSchema.array(), AppointmentStatusAuditOrderByWithAggregationInputSchema ]).optional(),
  by: AppointmentStatusAuditScalarFieldEnumSchema.array(), 
  having: AppointmentStatusAuditScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AppointmentStatusAuditFindUniqueArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditFindUniqueArgs> = z.object({
  select: AppointmentStatusAuditSelectSchema.optional(),
  include: AppointmentStatusAuditIncludeSchema.optional(),
  where: AppointmentStatusAuditWhereUniqueInputSchema, 
}).strict();

export const AppointmentStatusAuditFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditFindUniqueOrThrowArgs> = z.object({
  select: AppointmentStatusAuditSelectSchema.optional(),
  include: AppointmentStatusAuditIncludeSchema.optional(),
  where: AppointmentStatusAuditWhereUniqueInputSchema, 
}).strict();

export const FileProcessingRecordFindFirstArgsSchema: z.ZodType<Prisma.FileProcessingRecordFindFirstArgs> = z.object({
  select: FileProcessingRecordSelectSchema.optional(),
  where: FileProcessingRecordWhereInputSchema.optional(), 
  orderBy: z.union([ FileProcessingRecordOrderByWithRelationInputSchema.array(), FileProcessingRecordOrderByWithRelationInputSchema ]).optional(),
  cursor: FileProcessingRecordWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FileProcessingRecordScalarFieldEnumSchema, FileProcessingRecordScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const FileProcessingRecordFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FileProcessingRecordFindFirstOrThrowArgs> = z.object({
  select: FileProcessingRecordSelectSchema.optional(),
  where: FileProcessingRecordWhereInputSchema.optional(), 
  orderBy: z.union([ FileProcessingRecordOrderByWithRelationInputSchema.array(), FileProcessingRecordOrderByWithRelationInputSchema ]).optional(),
  cursor: FileProcessingRecordWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FileProcessingRecordScalarFieldEnumSchema, FileProcessingRecordScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const FileProcessingRecordFindManyArgsSchema: z.ZodType<Prisma.FileProcessingRecordFindManyArgs> = z.object({
  select: FileProcessingRecordSelectSchema.optional(),
  where: FileProcessingRecordWhereInputSchema.optional(), 
  orderBy: z.union([ FileProcessingRecordOrderByWithRelationInputSchema.array(), FileProcessingRecordOrderByWithRelationInputSchema ]).optional(),
  cursor: FileProcessingRecordWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FileProcessingRecordScalarFieldEnumSchema, FileProcessingRecordScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const FileProcessingRecordAggregateArgsSchema: z.ZodType<Prisma.FileProcessingRecordAggregateArgs> = z.object({
  where: FileProcessingRecordWhereInputSchema.optional(), 
  orderBy: z.union([ FileProcessingRecordOrderByWithRelationInputSchema.array(), FileProcessingRecordOrderByWithRelationInputSchema ]).optional(),
  cursor: FileProcessingRecordWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const FileProcessingRecordGroupByArgsSchema: z.ZodType<Prisma.FileProcessingRecordGroupByArgs> = z.object({
  where: FileProcessingRecordWhereInputSchema.optional(), 
  orderBy: z.union([ FileProcessingRecordOrderByWithAggregationInputSchema.array(), FileProcessingRecordOrderByWithAggregationInputSchema ]).optional(),
  by: FileProcessingRecordScalarFieldEnumSchema.array(), 
  having: FileProcessingRecordScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const FileProcessingRecordFindUniqueArgsSchema: z.ZodType<Prisma.FileProcessingRecordFindUniqueArgs> = z.object({
  select: FileProcessingRecordSelectSchema.optional(),
  where: FileProcessingRecordWhereUniqueInputSchema, 
}).strict();

export const FileProcessingRecordFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FileProcessingRecordFindUniqueOrThrowArgs> = z.object({
  select: FileProcessingRecordSelectSchema.optional(),
  where: FileProcessingRecordWhereUniqueInputSchema, 
}).strict();

export const DepartmentCreateArgsSchema: z.ZodType<Prisma.DepartmentCreateArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  data: z.union([ DepartmentCreateInputSchema, DepartmentUncheckedCreateInputSchema ]),
}).strict();

export const DepartmentUpsertArgsSchema: z.ZodType<Prisma.DepartmentUpsertArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereUniqueInputSchema, 
  create: z.union([ DepartmentCreateInputSchema, DepartmentUncheckedCreateInputSchema ]),
  update: z.union([ DepartmentUpdateInputSchema, DepartmentUncheckedUpdateInputSchema ]),
}).strict();

export const DepartmentCreateManyArgsSchema: z.ZodType<Prisma.DepartmentCreateManyArgs> = z.object({
  data: z.union([ DepartmentCreateManyInputSchema, DepartmentCreateManyInputSchema.array() ]),
}).strict();

export const DepartmentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DepartmentCreateManyAndReturnArgs> = z.object({
  data: z.union([ DepartmentCreateManyInputSchema, DepartmentCreateManyInputSchema.array() ]),
}).strict();

export const DepartmentDeleteArgsSchema: z.ZodType<Prisma.DepartmentDeleteArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereUniqueInputSchema, 
}).strict();

export const DepartmentUpdateArgsSchema: z.ZodType<Prisma.DepartmentUpdateArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  data: z.union([ DepartmentUpdateInputSchema, DepartmentUncheckedUpdateInputSchema ]),
  where: DepartmentWhereUniqueInputSchema, 
}).strict();

export const DepartmentUpdateManyArgsSchema: z.ZodType<Prisma.DepartmentUpdateManyArgs> = z.object({
  data: z.union([ DepartmentUpdateManyMutationInputSchema, DepartmentUncheckedUpdateManyInputSchema ]),
  where: DepartmentWhereInputSchema.optional(), 
}).strict();

export const DepartmentDeleteManyArgsSchema: z.ZodType<Prisma.DepartmentDeleteManyArgs> = z.object({
  where: DepartmentWhereInputSchema.optional(), 
}).strict();

export const ClientCreateArgsSchema: z.ZodType<Prisma.ClientCreateArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  data: z.union([ ClientCreateInputSchema, ClientUncheckedCreateInputSchema ]),
}).strict();

export const ClientUpsertArgsSchema: z.ZodType<Prisma.ClientUpsertArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereUniqueInputSchema, 
  create: z.union([ ClientCreateInputSchema, ClientUncheckedCreateInputSchema ]),
  update: z.union([ ClientUpdateInputSchema, ClientUncheckedUpdateInputSchema ]),
}).strict();

export const ClientCreateManyArgsSchema: z.ZodType<Prisma.ClientCreateManyArgs> = z.object({
  data: z.union([ ClientCreateManyInputSchema, ClientCreateManyInputSchema.array() ]),
}).strict();

export const ClientCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ClientCreateManyAndReturnArgs> = z.object({
  data: z.union([ ClientCreateManyInputSchema, ClientCreateManyInputSchema.array() ]),
}).strict();

export const ClientDeleteArgsSchema: z.ZodType<Prisma.ClientDeleteArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereUniqueInputSchema, 
}).strict();

export const ClientUpdateArgsSchema: z.ZodType<Prisma.ClientUpdateArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  data: z.union([ ClientUpdateInputSchema, ClientUncheckedUpdateInputSchema ]),
  where: ClientWhereUniqueInputSchema, 
}).strict();

export const ClientUpdateManyArgsSchema: z.ZodType<Prisma.ClientUpdateManyArgs> = z.object({
  data: z.union([ ClientUpdateManyMutationInputSchema, ClientUncheckedUpdateManyInputSchema ]),
  where: ClientWhereInputSchema.optional(), 
}).strict();

export const ClientDeleteManyArgsSchema: z.ZodType<Prisma.ClientDeleteManyArgs> = z.object({
  where: ClientWhereInputSchema.optional(), 
}).strict();

export const PatientCreateArgsSchema: z.ZodType<Prisma.PatientCreateArgs> = z.object({
  select: PatientSelectSchema.optional(),
  include: PatientIncludeSchema.optional(),
  data: z.union([ PatientCreateInputSchema, PatientUncheckedCreateInputSchema ]),
}).strict();

export const PatientUpsertArgsSchema: z.ZodType<Prisma.PatientUpsertArgs> = z.object({
  select: PatientSelectSchema.optional(),
  include: PatientIncludeSchema.optional(),
  where: PatientWhereUniqueInputSchema, 
  create: z.union([ PatientCreateInputSchema, PatientUncheckedCreateInputSchema ]),
  update: z.union([ PatientUpdateInputSchema, PatientUncheckedUpdateInputSchema ]),
}).strict();

export const PatientCreateManyArgsSchema: z.ZodType<Prisma.PatientCreateManyArgs> = z.object({
  data: z.union([ PatientCreateManyInputSchema, PatientCreateManyInputSchema.array() ]),
}).strict();

export const PatientCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PatientCreateManyAndReturnArgs> = z.object({
  data: z.union([ PatientCreateManyInputSchema, PatientCreateManyInputSchema.array() ]),
}).strict();

export const PatientDeleteArgsSchema: z.ZodType<Prisma.PatientDeleteArgs> = z.object({
  select: PatientSelectSchema.optional(),
  include: PatientIncludeSchema.optional(),
  where: PatientWhereUniqueInputSchema, 
}).strict();

export const PatientUpdateArgsSchema: z.ZodType<Prisma.PatientUpdateArgs> = z.object({
  select: PatientSelectSchema.optional(),
  include: PatientIncludeSchema.optional(),
  data: z.union([ PatientUpdateInputSchema, PatientUncheckedUpdateInputSchema ]),
  where: PatientWhereUniqueInputSchema, 
}).strict();

export const PatientUpdateManyArgsSchema: z.ZodType<Prisma.PatientUpdateManyArgs> = z.object({
  data: z.union([ PatientUpdateManyMutationInputSchema, PatientUncheckedUpdateManyInputSchema ]),
  where: PatientWhereInputSchema.optional(), 
}).strict();

export const PatientDeleteManyArgsSchema: z.ZodType<Prisma.PatientDeleteManyArgs> = z.object({
  where: PatientWhereInputSchema.optional(), 
}).strict();

export const AppointmentTypeCreateArgsSchema: z.ZodType<Prisma.AppointmentTypeCreateArgs> = z.object({
  select: AppointmentTypeSelectSchema.optional(),
  include: AppointmentTypeIncludeSchema.optional(),
  data: z.union([ AppointmentTypeCreateInputSchema, AppointmentTypeUncheckedCreateInputSchema ]),
}).strict();

export const AppointmentTypeUpsertArgsSchema: z.ZodType<Prisma.AppointmentTypeUpsertArgs> = z.object({
  select: AppointmentTypeSelectSchema.optional(),
  include: AppointmentTypeIncludeSchema.optional(),
  where: AppointmentTypeWhereUniqueInputSchema, 
  create: z.union([ AppointmentTypeCreateInputSchema, AppointmentTypeUncheckedCreateInputSchema ]),
  update: z.union([ AppointmentTypeUpdateInputSchema, AppointmentTypeUncheckedUpdateInputSchema ]),
}).strict();

export const AppointmentTypeCreateManyArgsSchema: z.ZodType<Prisma.AppointmentTypeCreateManyArgs> = z.object({
  data: z.union([ AppointmentTypeCreateManyInputSchema, AppointmentTypeCreateManyInputSchema.array() ]),
}).strict();

export const AppointmentTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AppointmentTypeCreateManyAndReturnArgs> = z.object({
  data: z.union([ AppointmentTypeCreateManyInputSchema, AppointmentTypeCreateManyInputSchema.array() ]),
}).strict();

export const AppointmentTypeDeleteArgsSchema: z.ZodType<Prisma.AppointmentTypeDeleteArgs> = z.object({
  select: AppointmentTypeSelectSchema.optional(),
  include: AppointmentTypeIncludeSchema.optional(),
  where: AppointmentTypeWhereUniqueInputSchema, 
}).strict();

export const AppointmentTypeUpdateArgsSchema: z.ZodType<Prisma.AppointmentTypeUpdateArgs> = z.object({
  select: AppointmentTypeSelectSchema.optional(),
  include: AppointmentTypeIncludeSchema.optional(),
  data: z.union([ AppointmentTypeUpdateInputSchema, AppointmentTypeUncheckedUpdateInputSchema ]),
  where: AppointmentTypeWhereUniqueInputSchema, 
}).strict();

export const AppointmentTypeUpdateManyArgsSchema: z.ZodType<Prisma.AppointmentTypeUpdateManyArgs> = z.object({
  data: z.union([ AppointmentTypeUpdateManyMutationInputSchema, AppointmentTypeUncheckedUpdateManyInputSchema ]),
  where: AppointmentTypeWhereInputSchema.optional(), 
}).strict();

export const AppointmentTypeDeleteManyArgsSchema: z.ZodType<Prisma.AppointmentTypeDeleteManyArgs> = z.object({
  where: AppointmentTypeWhereInputSchema.optional(), 
}).strict();

export const AppointmentCreateArgsSchema: z.ZodType<Prisma.AppointmentCreateArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  data: z.union([ AppointmentCreateInputSchema, AppointmentUncheckedCreateInputSchema ]),
}).strict();

export const AppointmentUpsertArgsSchema: z.ZodType<Prisma.AppointmentUpsertArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereUniqueInputSchema, 
  create: z.union([ AppointmentCreateInputSchema, AppointmentUncheckedCreateInputSchema ]),
  update: z.union([ AppointmentUpdateInputSchema, AppointmentUncheckedUpdateInputSchema ]),
}).strict();

export const AppointmentCreateManyArgsSchema: z.ZodType<Prisma.AppointmentCreateManyArgs> = z.object({
  data: z.union([ AppointmentCreateManyInputSchema, AppointmentCreateManyInputSchema.array() ]),
}).strict();

export const AppointmentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AppointmentCreateManyAndReturnArgs> = z.object({
  data: z.union([ AppointmentCreateManyInputSchema, AppointmentCreateManyInputSchema.array() ]),
}).strict();

export const AppointmentDeleteArgsSchema: z.ZodType<Prisma.AppointmentDeleteArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereUniqueInputSchema, 
}).strict();

export const AppointmentUpdateArgsSchema: z.ZodType<Prisma.AppointmentUpdateArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  data: z.union([ AppointmentUpdateInputSchema, AppointmentUncheckedUpdateInputSchema ]),
  where: AppointmentWhereUniqueInputSchema, 
}).strict();

export const AppointmentUpdateManyArgsSchema: z.ZodType<Prisma.AppointmentUpdateManyArgs> = z.object({
  data: z.union([ AppointmentUpdateManyMutationInputSchema, AppointmentUncheckedUpdateManyInputSchema ]),
  where: AppointmentWhereInputSchema.optional(), 
}).strict();

export const AppointmentDeleteManyArgsSchema: z.ZodType<Prisma.AppointmentDeleteManyArgs> = z.object({
  where: AppointmentWhereInputSchema.optional(), 
}).strict();

export const AppointmentReasonCreateArgsSchema: z.ZodType<Prisma.AppointmentReasonCreateArgs> = z.object({
  select: AppointmentReasonSelectSchema.optional(),
  include: AppointmentReasonIncludeSchema.optional(),
  data: z.union([ AppointmentReasonCreateInputSchema, AppointmentReasonUncheckedCreateInputSchema ]),
}).strict();

export const AppointmentReasonUpsertArgsSchema: z.ZodType<Prisma.AppointmentReasonUpsertArgs> = z.object({
  select: AppointmentReasonSelectSchema.optional(),
  include: AppointmentReasonIncludeSchema.optional(),
  where: AppointmentReasonWhereUniqueInputSchema, 
  create: z.union([ AppointmentReasonCreateInputSchema, AppointmentReasonUncheckedCreateInputSchema ]),
  update: z.union([ AppointmentReasonUpdateInputSchema, AppointmentReasonUncheckedUpdateInputSchema ]),
}).strict();

export const AppointmentReasonCreateManyArgsSchema: z.ZodType<Prisma.AppointmentReasonCreateManyArgs> = z.object({
  data: z.union([ AppointmentReasonCreateManyInputSchema, AppointmentReasonCreateManyInputSchema.array() ]),
}).strict();

export const AppointmentReasonCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AppointmentReasonCreateManyAndReturnArgs> = z.object({
  data: z.union([ AppointmentReasonCreateManyInputSchema, AppointmentReasonCreateManyInputSchema.array() ]),
}).strict();

export const AppointmentReasonDeleteArgsSchema: z.ZodType<Prisma.AppointmentReasonDeleteArgs> = z.object({
  select: AppointmentReasonSelectSchema.optional(),
  include: AppointmentReasonIncludeSchema.optional(),
  where: AppointmentReasonWhereUniqueInputSchema, 
}).strict();

export const AppointmentReasonUpdateArgsSchema: z.ZodType<Prisma.AppointmentReasonUpdateArgs> = z.object({
  select: AppointmentReasonSelectSchema.optional(),
  include: AppointmentReasonIncludeSchema.optional(),
  data: z.union([ AppointmentReasonUpdateInputSchema, AppointmentReasonUncheckedUpdateInputSchema ]),
  where: AppointmentReasonWhereUniqueInputSchema, 
}).strict();

export const AppointmentReasonUpdateManyArgsSchema: z.ZodType<Prisma.AppointmentReasonUpdateManyArgs> = z.object({
  data: z.union([ AppointmentReasonUpdateManyMutationInputSchema, AppointmentReasonUncheckedUpdateManyInputSchema ]),
  where: AppointmentReasonWhereInputSchema.optional(), 
}).strict();

export const AppointmentReasonDeleteManyArgsSchema: z.ZodType<Prisma.AppointmentReasonDeleteManyArgs> = z.object({
  where: AppointmentReasonWhereInputSchema.optional(), 
}).strict();

export const AppointmentStatusAuditCreateArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditCreateArgs> = z.object({
  select: AppointmentStatusAuditSelectSchema.optional(),
  include: AppointmentStatusAuditIncludeSchema.optional(),
  data: z.union([ AppointmentStatusAuditCreateInputSchema, AppointmentStatusAuditUncheckedCreateInputSchema ]),
}).strict();

export const AppointmentStatusAuditUpsertArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditUpsertArgs> = z.object({
  select: AppointmentStatusAuditSelectSchema.optional(),
  include: AppointmentStatusAuditIncludeSchema.optional(),
  where: AppointmentStatusAuditWhereUniqueInputSchema, 
  create: z.union([ AppointmentStatusAuditCreateInputSchema, AppointmentStatusAuditUncheckedCreateInputSchema ]),
  update: z.union([ AppointmentStatusAuditUpdateInputSchema, AppointmentStatusAuditUncheckedUpdateInputSchema ]),
}).strict();

export const AppointmentStatusAuditCreateManyArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditCreateManyArgs> = z.object({
  data: z.union([ AppointmentStatusAuditCreateManyInputSchema, AppointmentStatusAuditCreateManyInputSchema.array() ]),
}).strict();

export const AppointmentStatusAuditCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditCreateManyAndReturnArgs> = z.object({
  data: z.union([ AppointmentStatusAuditCreateManyInputSchema, AppointmentStatusAuditCreateManyInputSchema.array() ]),
}).strict();

export const AppointmentStatusAuditDeleteArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditDeleteArgs> = z.object({
  select: AppointmentStatusAuditSelectSchema.optional(),
  include: AppointmentStatusAuditIncludeSchema.optional(),
  where: AppointmentStatusAuditWhereUniqueInputSchema, 
}).strict();

export const AppointmentStatusAuditUpdateArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditUpdateArgs> = z.object({
  select: AppointmentStatusAuditSelectSchema.optional(),
  include: AppointmentStatusAuditIncludeSchema.optional(),
  data: z.union([ AppointmentStatusAuditUpdateInputSchema, AppointmentStatusAuditUncheckedUpdateInputSchema ]),
  where: AppointmentStatusAuditWhereUniqueInputSchema, 
}).strict();

export const AppointmentStatusAuditUpdateManyArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditUpdateManyArgs> = z.object({
  data: z.union([ AppointmentStatusAuditUpdateManyMutationInputSchema, AppointmentStatusAuditUncheckedUpdateManyInputSchema ]),
  where: AppointmentStatusAuditWhereInputSchema.optional(), 
}).strict();

export const AppointmentStatusAuditDeleteManyArgsSchema: z.ZodType<Prisma.AppointmentStatusAuditDeleteManyArgs> = z.object({
  where: AppointmentStatusAuditWhereInputSchema.optional(), 
}).strict();

export const FileProcessingRecordCreateArgsSchema: z.ZodType<Prisma.FileProcessingRecordCreateArgs> = z.object({
  select: FileProcessingRecordSelectSchema.optional(),
  data: z.union([ FileProcessingRecordCreateInputSchema, FileProcessingRecordUncheckedCreateInputSchema ]),
}).strict();

export const FileProcessingRecordUpsertArgsSchema: z.ZodType<Prisma.FileProcessingRecordUpsertArgs> = z.object({
  select: FileProcessingRecordSelectSchema.optional(),
  where: FileProcessingRecordWhereUniqueInputSchema, 
  create: z.union([ FileProcessingRecordCreateInputSchema, FileProcessingRecordUncheckedCreateInputSchema ]),
  update: z.union([ FileProcessingRecordUpdateInputSchema, FileProcessingRecordUncheckedUpdateInputSchema ]),
}).strict();

export const FileProcessingRecordCreateManyArgsSchema: z.ZodType<Prisma.FileProcessingRecordCreateManyArgs> = z.object({
  data: z.union([ FileProcessingRecordCreateManyInputSchema, FileProcessingRecordCreateManyInputSchema.array() ]),
}).strict();

export const FileProcessingRecordCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FileProcessingRecordCreateManyAndReturnArgs> = z.object({
  data: z.union([ FileProcessingRecordCreateManyInputSchema, FileProcessingRecordCreateManyInputSchema.array() ]),
}).strict();

export const FileProcessingRecordDeleteArgsSchema: z.ZodType<Prisma.FileProcessingRecordDeleteArgs> = z.object({
  select: FileProcessingRecordSelectSchema.optional(),
  where: FileProcessingRecordWhereUniqueInputSchema, 
}).strict();

export const FileProcessingRecordUpdateArgsSchema: z.ZodType<Prisma.FileProcessingRecordUpdateArgs> = z.object({
  select: FileProcessingRecordSelectSchema.optional(),
  data: z.union([ FileProcessingRecordUpdateInputSchema, FileProcessingRecordUncheckedUpdateInputSchema ]),
  where: FileProcessingRecordWhereUniqueInputSchema, 
}).strict();

export const FileProcessingRecordUpdateManyArgsSchema: z.ZodType<Prisma.FileProcessingRecordUpdateManyArgs> = z.object({
  data: z.union([ FileProcessingRecordUpdateManyMutationInputSchema, FileProcessingRecordUncheckedUpdateManyInputSchema ]),
  where: FileProcessingRecordWhereInputSchema.optional(), 
}).strict();

export const FileProcessingRecordDeleteManyArgsSchema: z.ZodType<Prisma.FileProcessingRecordDeleteManyArgs> = z.object({
  where: FileProcessingRecordWhereInputSchema.optional(), 
}).strict();
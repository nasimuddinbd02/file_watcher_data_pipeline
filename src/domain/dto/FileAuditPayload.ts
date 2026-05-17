export interface FileAuditPayload {
    file_name: string;
    file_size_bytes: number;
    total_time_ms: number;
    status: "SUCCESS" | "FAILED";
    error_message?: string;
}

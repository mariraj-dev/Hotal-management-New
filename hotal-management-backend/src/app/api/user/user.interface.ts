export interface UserRO {
    id: string,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    user_category: string,
    roster_global_userid: string,
    group_school_id: number,
    hierarchy: flexibleGroupsRO
}

export interface flexibleGroupsRO{
    id: string,
    name: string,
    code: string,
    reference_id: string,
    parent_id: number,
    type: string
}

export enum  RoleInterface {
    ALLOW_CONTENT_BULK_EDIT = 'ALLOW_CONTENT_BULK_EDIT',
    APPROVE_CONTENT_BULK_EDITS = 'APPROVE_CONTENT_BULK_EDITS',
}

export interface ExcelInfoInterface  {
    headers: object,
    filePath: string,
    fileUploadType: string
}

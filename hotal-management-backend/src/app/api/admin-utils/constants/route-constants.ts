export class Constants {
  public static ID = 'id';
  public static BULK_ID = 'bulk_id';
  public static UPDATE_TYPE = 'update_type';
  public static FORMAT = 'format';
  public static STATUS = 'status';
  public static RETRIES = 'retries';
  public static CONTENT_ID = 'content_id';
  public static ORIGINAL_CONTENT_ID = 'original_content_id';
  public static KEY_NAME = 'key_name';

}

export class RouteConstants {
  public static API_BASE_ROUTE = 'api/';
  private static API_VERSION = "v1/";
  private static API_ADMIN_UTILS = 'admin-utils/';
  private static API_INTERNAL = 'internal/';
  private static API_TENANT_SETTING_CONFIG = 'tenant-setting-config';
  private static API_OAUTH_CLIENTS = 'oauth-clients';
  private static API_GROUP_HIERARCHY = 'group-hierarchy';
  private static API_TENANT_CONFIG = 'tenant';
  private static API_USERS = 'users';
  private static API_USERS_PASSWORD = 'reset-password';
  private static API_CONTENT = 'content';
  private static API_ASSESSMENT_CONTENT = 'assessment-content';
  private static API_FLEXIBLE_GROUP = 'flexible-groups';
  private static LEARNING_REGISTRY = 'learning-registry/';
  private static API_SEARCH = 'search';
  private static API_DIY = 'diy';
  private static API_NUDGE_TYPE = 'nudge-types';
  private static API_CONTENT_AI = 'content-ai';




  // api/v1/admin-utils/course
  public static API_COURSE = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + 'course';
  // api/v1/admin-utils/classes/:teacher_id/teacher
  public static API_CLASSES = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + 'classes/:teacher_id/teacher';
  // api/v1/admin-utils/instructional-coaches
  public static API_INSTRUCTIONAL_COACHES = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + 'instructional-coaches';
  // api/v1/admin-utils/classes/archive
  public static API_ARCHIVE_CLASSES = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + 'classes/archive';
  // api/v1/admin-utils/classes/:id?group_id
  public static API_UPDATE_CLASSES = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + 'class/:id';
  // api/v1/admin-utils/tenant-setting-config
  public static API_TENANT_SETTING_CREATE = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_TENANT_SETTING_CONFIG;
  // api/v1/admin-utils/tenant-setting-config/:tenant_setting_Key
  public static API_TENANT_SETTING_UPDATE = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_TENANT_SETTING_CONFIG + '/:tenant_setting_id';
  // api/v1/admin-utils/tenant-setting-config/:tenant_setting_Key
  public static API_TENANT_SETTING_DELETE = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_TENANT_SETTING_CONFIG + '/:tenant_setting_id';
  // api/v1/admin-utils/tenant-setting-config/group-name
  public static API_TENANT_SETTING_GET_GROUPNAME = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_TENANT_SETTING_CONFIG + '/group-name';
  // api/v1/admin-utils/tenant-setting-config/sub-group-name/:group_name
  public static API_TENANT_SETTING_GET_SUBGROUPNAME = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_TENANT_SETTING_CONFIG + '/sub-group-name/:group_name';
  // api/v1/admin-utils/oauth-clients
  public static API_OAUTH_CLIENT = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_OAUTH_CLIENTS;
  // api/v1/admin-utils/oauth-clients/:client_id
  public static API_OAUTH_CLIENT_UPDATE = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_OAUTH_CLIENTS;
  // api/v1/admin-utils/oauth-clients/:client_id
  public static API_OAUTH_CLIENT_DELETE = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_OAUTH_CLIENTS;
  // api/v1/admin-utils/group-hierarchy/:hierarchy_id
  public static API_GROUP_HIERARCHY_GET = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_GROUP_HIERARCHY + '/:hierarchy_id';
  // api/v1/admin-utils/tenant
  public static API_TENANT = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_TENANT_CONFIG;
  // api/v1/admin-utils/tenant/stats
  public static API_TENANT_STATS = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_TENANT_CONFIG + '/stats';
  // api/v1/admin-utils/tenant/:tenantId
  public static API_TENANT_ID = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_TENANT_CONFIG + '/:tenant_id';
  // api/v1/admin-utils/tenant-id?id=<tenant_id>
  public static API_TENANT_BY_ID = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + 'tenant-id';
  // api/internal/v1/admin-utils/health
  public static API_HEALTH_CHECK = this.API_BASE_ROUTE + this.API_INTERNAL + this.API_VERSION + this.API_ADMIN_UTILS + 'health';
  // api/v1/admin-utils/users
  public static API_CREATE_USERS = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_USERS;
  // api/v1/admin-utils/users
  public static API_GET_USERS = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_USERS;
  // api/v1/admin-utils/users
  public static API_UPADTE_USER_DATA = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_USERS;
  // api/v1/admin-utils/users
  public static API_UPADTE_USER_ROLE = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_USERS;
  // api/v1/admin-utils/users/school
  public static API_CREATE_NEW_SCHOOL = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_USERS + '/school';
  // api/v1/admin-utils/reset-password
  public static API_GET_USERS_PASSWORD = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_USERS_PASSWORD;
  // api/v1/admin-utils/oneroster/manual-sync
  public static API_CREATE_ROSTER_DATA = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + 'oneroster/manual-sync';
  // api/v1/admin-utils/flexible-groups
  public static API_UPDATE_FLEXIBLE_GROUP = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_FLEXIBLE_GROUP;
  // api/v1/admin-utils/frameworks/:subject_id
  public static API_FW_BY_SUBJECT_ID = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + 'frameworks/:subject_id';
  // api/admin-utils/v2/users/accounts
  public static API_NUCLEUS_AUTH_ACCOUNTS = this.API_BASE_ROUTE + this.API_ADMIN_UTILS + "v2/users/accounts";
  // api/v1/admin-utils/learning-registry/content/registry/list
  public static CONTENT_REGISTRY_LIST = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.LEARNING_REGISTRY + 'content/registry/list';
  // api/v1/admin-utils/learning-registry/tool/registry/list
  public static TOOL_REGISTRY_LIST = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.LEARNING_REGISTRY + 'tool/registry/list';
  //Content-Bulk
  // api/v1/admin-utils/content/bulk
  public static API_CONTENT_BULK = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_CONTENT + '/bulk';
  // api/v1/admin-utils/content/bulk/review-content
  public static API_CONTENT_BULK_REVIEW_CONTENT = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_CONTENT + '/bulk/review-content';
  // api/v1/admin-utils/content/resources/references
  public static API_CONTENT_RESOURCES_REFERENCES = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_CONTENT + '/resources/references';
  // api/v1/admin-utils/content/resources/details
  public static API_CONTENT_RESOURCES_DETAILS = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_CONTENT + '/resources/details';
  // api/v1/admin-utils/content/lookups/flag-reasons
  public static API_CONTENT_LOOKUP_FLAG_REASONS = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_CONTENT + '/lookups/flag-reasons';
  // api/v1/admin-utils/search/resources/details
  public static API_SERACH_RESOURCES_DETAILS = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_SEARCH + '/resources/details';
  //Assessment_Content_bulk
  // api/v1/admin-utils/assessment-content/bulk
  public static API_ASSESSMENT_CONTENT_BULK = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_ASSESSMENT_CONTENT + '/bulk';
  // api/v1/admin-utils/assessment-content/bulk/review-content
  public static API_ASSESSMENT_CONTENT_BULK_REVIEW_CONTENT = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_ASSESSMENT_CONTENT + '/bulk/review-content';
  // api/v1/admin-utils/assessment-content/assessment/references
  public static API_ASSESSMENT_CONTENT_ASSESSMENT_REFERENCES = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_ASSESSMENT_CONTENT + '/assessment/references';


  // api/v1/admin-utils/diy/school_districts
  public static SCHOOL_DISTRICTS = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_DIY + '/school_districts';
  // api/v1/admin-utils/diy/school_districts/requester/list
  public static SCHOOL_DISTRICTS_LIST = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_DIY + '/school_districts/list';
  // api/v1/admin-utils/diy/school_districts/requester/register
  public static SCHOOL_DISTRICTS_REQUEST = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_DIY + '/school_district/register';
  // api/v1/admin-utils/diy/school_districts/requester/confirm/:token
  public static SCHOOL_DISTRICTS_REQUEST_VALIDATE = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_DIY + '/school_district/requester/confirm';
  // api/v1/admin-utils/diy/school_districts/admin/confirm/:token
  public static SCHOOL_DISTRICTS_ADMIN_REQUEST_VALIDATE = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_DIY + '/school_district/admin/confirm/:token';
  // api/v1/admin-utils/tenant-setting?tenant_id
  public static API_GET_TENANT_SETTING = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + 'tenant-setting';
  // api/v1/admin-utils/setting/facets?tenant_id
  public static API_GET_TENANT_SETTING_FACETS = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + 'setting/facets';
  // api/v1/admin-utils/tenant/libraries?tenant_id
  public static API_GET_TENANT_LIBRARY = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + 'tenant/libraries';
  // api/v1/admin-utils/tenant/navigator-program/registry?tenant_id
  public static API_GET_TENANT_NAVIGATOR = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + 'tenant/navigator-program/registry';
  // api/v1/admin-utils/subject/classifications?tenant_id
  public static API_GET_SUBJECTS = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + 'subject/classifications';
  // api/v1/admin-utils/diy/school_country
  public static API_GET_SCHOOL_COUNTRY = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_DIY + '/school_country';
  // api/v1/admin-utils/diy/school_districts_state
  public static API_GET_SCHOOL_DISTRICTS_STATE = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_DIY + '/school_districts_state';
  // api/v1/admin-utils/diy/school_info
  public static API_GET_SCHOOL_INFO = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_DIY + '/school_info';
  // api/v1/admin-utils/diy/common_subjects
  public static API_GET_COMMON_SUBJECTS = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_DIY + '/common_subjects';
  // api/v1/admin-utils/nudge-types
  public static API_POST_NUDGE_TYPES = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_NUDGE_TYPE;
  // api/v1/admin-utils/nudge-types/:id
  public static API_NUDGE_TYPES_BY_ID = this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_NUDGE_TYPE + '/:id';
  // api/v1/admin-utils/content-ai
  public static API_GET_CONTENT_AI =  this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_CONTENT_AI + '/:key_name';
   // api/v1/admin-utils/content-ai/:id/:keyName
  public static API_GET_CONTENT_AI_BY_ID =  this.API_BASE_ROUTE + this.API_VERSION + this.API_ADMIN_UTILS + this.API_CONTENT_AI + '/:id' + '/:key_name';
};

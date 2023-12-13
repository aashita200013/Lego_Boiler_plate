//Create the module list according to your modules list Names

const modulesList = [
    {
      moduleName: "Lego Manager",
      API: "legoManager",
      slug: "lego_manager",
      isSecure: true,
      subModule: [
        {
          subModuleName: "queryLegos",
          slug: "queryLegos",
          isSecure: true,
        },
        {
          subModuleName: "createLegos",
          slug: "createLegos",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "Super User Management",
      slug: "super_user_management",
      API: "superUserManagement",
      isSecure: true,
      subModule: [
        {
          subModuleName: "getUserDetails",
          slug: "get_user_details",
          isSecure: true,
        },
        {
          subModuleName: "getUserByEmail",
          slug: "get_user_by_email",
          isSecure: true,
        },
        {
          subModuleName: "getUserByPhone",
          slug: "get_user_by_phone",
          isSecure: true,
        },
        {
          subModuleName: "getUserById",
          slug: "get_user_by_id",
          isSecure: true,
        },
        {
          subModuleName: "getAllUsers",
          slug: "get_all_users",
          isSecure: true,
        },
        {
          subModuleName: "deleteUser",
          slug: "delete_user",
          isSecure: true,
        },
        {
          subModuleName: "updateUser",
          slug: "update_user",
          isSecure: true,
        },
        {
          subModuleName: "registerUser",
          slug: "register_user",
          isSecure: true,
        },
        {
          subModuleName: "updateUserByKeycloackId",
          slug: "update_user_by_keycloackid",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "User Management",
      slug: "user_management",
      API: "userManagement",
      isSecure: true,
      subModule: [
        {
          subModuleName: "registerUser",
          slug: "register_user",
          isSecure: true,
        },
        {
          subModuleName: "getUserByEmail",
          slug: "get_user_by_email",
          isSecure: true,
        },
        {
          subModuleName: "getUserByPhone",
          slug: "get_user_by_phone",
          isSecure: true,
        },
        {
          subModuleName: "getUserById",
          slug: "get_user_by_id",
          isSecure: true,
        },
        {
          subModuleName: "getUsersByCompanyName",
          slug: "get_users_by_company_name",
          isSecure: '"true"',
        },
        {
          subModuleName: "getAllUsers",
          slug: "get_all_users",
          isSecure: true,
        },
        {
          subModuleName: "deleteUser",
          slug: "delete_user",
          isSecure: true,
        },
        {
          subModuleName: "updateUser",
          slug: "update_user",
          isSecure: true,
        },
        {
          subModuleName: "updateUserByKeycloackId",
          slug: "update_user_by_keycloackid",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "Sidebar",
      slug: "sidebar",
      API: "sidebar",
      isSecure: true,
      subModule: [
        {
          subModuleName: "getSidebar",
          slug: "get_sidebar",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "Company Management",
      slug: "company_management",
      API: "companyManagement",
      isSecure: true,
      subModule: [
        {
          subModuleName: "createCompany",
          slug: "create_company",
          isSecure: true,
        },
        {
          subModuleName: "getCompanyDetails",
          slug: "get_company_details",
          isSecure: true,
        },
        {
          subModuleName: "getCompanyByCompanyName",
          slug: "get_company_by_company_name",
          isSecure: true,
        },
        {
          subModuleName: "getCompaniesList",
          slug: "get_companies_list",
          isSecure: true,
        },
        {
          subModuleName: "deleteCompany",
          slug: "delete_company",
          isSecure: true,
        },
        {
          subModuleName: "updateCompanyDetails",
          slug: "update_company_details",
          isSecure: true,
        },
        {
          subModuleName: "createOrganizationtree",
          slug: "create_organization_tree",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "Access Management",
      slug: "access_management",
      API: "accessManagement",
      isSecure: true,
      subModule: [
        {
          subModuleName: "getDefaultModules",
          slug: "get_default_modules",
          isSecure: true,
        },
        {
          subModuleName: "getAssignedUsers",
          slug: "get_assigned_users",
          isSecure: true,
        },
        {
          subModuleName: "getAllRoles",
          slug: "get_all_roles",
          isSecure: true,
        },
        {
          subModuleName: "createNewRole",
          slug: "create_new_role",
          isSecure: true,
        },
        {
          subModuleName: "updateRolePermissions",
          slug: "update_role_permissions",
          isSecure: true,
        },
        {
          subModuleName: "assignRoles",
          slug: "assign_roles",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "Super Access Management",
      slug: "super_access_management",
      API: "superAccessManagement",
      isSecure: true,
      subModule: [
        {
          subModuleName: "getDefaultModules",
          slug: "get_default_modules",
          isSecure: true,
        },
        {
          subModuleName: "getAssignedUsers",
          slug: "get_assigned_users",
          isSecure: true,
        },
        {
          subModuleName: "getAllRoles",
          slug: "get_all_roles",
          isSecure: true,
        },
        {
          subModuleName: "createNewRole",
          slug: "create_new_role",
          isSecure: true,
        },
        {
          subModuleName: "updateRolePermissions",
          slug: "update_role_permissions",
          isSecure: true,
        },
        {
          subModuleName: "assignRoles",
          slug: "assign_roles",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "Buzz",
      slug: "buzz",
      API: "buzz",
      isSecure: true,
      subModule: [
        {
          subModuleName: "uploadBuzz",
          slug: "upload_buzz",
          isSecure: true,
        },
        {
          subModuleName: "showBuzz",
          slug: "show_buzz",
          isSecure: true,
        },
        {
          subModuleName: "updateBuzz",
          slug: "update_buzz",
          isSecure: true,
        },
        {
          subModuleName: "latestRelease",
          slug: "latest_release",
          isSecure: true,
        },
        {
          subModuleName: "download",
          slug: "download",
          isSecure: true,
        },
        {
          subModuleName: "removeBuzz",
          slug: "remove_buzz",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "Admin Dashboard",
      slug: "admin_dashboard",
      API: "adminDashboard",
      isSecure: true,
      subModule: [
        {
          subModuleName: "uploadBuzz",
          slug: "upload_buzz",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "paragraphToFeatureExctraction",
      slug: "email_to_json",
      API: "paragraphToFeatureExctraction",
      isSecure: true,
      subModule: [
        {
          subModuleName: "emailToJsonConverter",
          slug: "email_to_json",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "lob",
      slug: "lob",
      API: "lob",
      isSecure: true,
      subModule: [
        { subModuleName: "validateLob", slug: "validate_lob", isSecure: true },
        {
          subModuleName: "createLob",
          slug: "create_lob",
          isSecure: true,
        },
        {
          subModuleName: "getLobs",
          slug: "get_lobs",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "jobs",
      slug: "jobs",
      API: "jobs",
      isSecure: true,
      subModule: [
        {
          subModuleName: "createJobs",
          slug: "create_job",
          isSecure: true,
        },
        {
          subModuleName: "deleteJobs",
          slug: "create_job",
          isSecure: true,
        },
        {
          subModuleName: "updateJobs",
          slug: "update_job",
          isSecure: true,
        },
        {
          subModuleName: "getJobs",
          slug: "get_jobs",
          isSecure: true,
        },
        {
          subModuleName: "getJobsByName",
          slug: "get_jobs_by_name",
          isSecure: true,
        },
  
        {
          subModuleName: "getJobsById",
          slug: "get_jobs_by_id",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "User Vault",
      slug: "user_vault",
      API: "userVault",
      isSecure: true,
      subModule: [
        {
          subModuleName: "createUserDoc",
          slug: "create_user_doc",
          isSecure: true,
        },
        {
          subModuleName: "readUserDoc",
          slug: "read_user_doc",
          isSecure: true,
        },
        {
          subModuleName: "updateUserDoc",
          slug: "update_user_doc",
          isSecure: true,
        },
        {
          subModuleName: "updateManyUserDoc",
          slug: "updateMany_user_doc",
          isSecure: true,
        },
        {
          subModuleName: "deleteUserDoc",
          slug: "delete_user_doc",
          isSecure: true,
        },
        {
          subModuleName: "deleteManyUserDoc",
          slug: "deleteMany_user_doc",
          isSecure: true,
        },
        {
          subModuleName: "getNavigationCardList",
          slug: "get_navigation_card_list",
          isSecure: true,
        },
        {
          subModuleName: "getModuleContent",
          slug: "get_module_content",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "Get_Img_From_Python",
      slug: "get_img_from_python",
      API: "get_img_from_python",
      isSecure: true,
      subModule: [
        {
          subModuleName: "getImg",
          slug: "get_img",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "AI_Module",
      slug: "ai_module",
      API: "ai_module",
      isSecure: true,
      subModule: [
        {
          subModuleName: "chatWithAI",
          slug: "chat_with_ai",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "Outreach",
      slug: "outreach",
      API: "outreach",
      isSecure: true,
      subModule: [
        {
          subModuleName: "getSocialTemplateBank",
          slug: "get_social_template_bank",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "Crm",
      slug: "crm",
      API: "crm",
      isSecure: true,
      subModule: [
        {
          subModuleName: "getLeads",
          slug: "get_leads",
          isSecure: true,
        },
        {
          subModuleName: "getLeadById",
          slug: "get_lead_by_id",
          isSecure: true,
        },
        {
          subModuleName: "createLead",
          slug: "create_lead",
          isSecure: true,
        },
        {
          subModuleName: "updateLead",
          slug: "update_lead",
          isSecure: true,
        },
        {
          subModuleName: "deleteLead",
          slug: "delete_lead",
          isSecure: true,
        },
        {
          subModuleName: "getApplicants",
          slug: "get_applicants",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "companyList",
      slug: "companyList",
      API: "companyList",
      isSecure: false,
      subModule: [
        {
          subModuleName: "createCompanyInList",
          slug: "create_company_in_list",
          isSecure: false,
        },
        {
          subModuleName: "deleteCompanyInList",
          slug: "delete_company_in_list",
          isSecure: false,
        },
        {
          subModuleName: "getAllCompanies",
          slug: "get_all_companies",
          isSecure: false,
        },
      ],
    },
    {
      moduleName: "countryStateCity",
      slug: "country_state_city",
      API: "countryStateCity",
      isSecure: true,
      subModule: [
        {
          subModuleName: "getAllCountries",
          slug: "get_all_countries",
          isSecure: true,
        },
        {
          subModuleName: "getCountryAdditionalInfo",
          slug: "get_countries_addition_info",
          isSecure: true,
        },
        {
          subModuleName: "getStatesByCountryName",
          slug: "get_states_by_country_name",
          isSecure: true,
        },
        {
          subModuleName: "getCitiesByStateAndCountryName",
          slug: "get_cities_by_state_and_country_name",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "companyDepartment",
      slug: "company_department",
      API: "companyDepartment",
      isSecure: true,
      subModule: [
        {
          subModuleName: "createDepartments",
          slug: "create_departments",
          isSecure: true,
        },
        {
          subModuleName: "getDepartments",
          slug: "get_departments",
          isSecure: true,
        },
      ],
    },
    {
      moduleName: "payment",
      slug: "payment",
      API: "payment",
      isSecure: true,
      subModule: [
        {
          subModuleName: "makePayment",
          slug: "make_payment",
          isSecure: true,
        },
        {
          subModuleName: "verifyOrder",
          slug: "verify_order",
          isSecure: true,
        },
      ],
    },
  ];
  
  module.exports = modulesList;
  
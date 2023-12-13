const magicJson = {
    type: "request",
    endpoint: "",
    executor: "",
    data: [], // [{}]
    metadata: {
      company: [
        {
          name: "",
          licence: [
            {
              moduleName: "",
              isAccesible: true, 
              permissions: [
                {
                  subModuleName: "",
                  create: true,
                  read: true,
                  update: true,
                  delete: true,
                },
              ],
            },
          ],
        },
      ],
      user: {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        licence: [
          {
            moduleName: "",
            isAccesible: true,
            permissions: [
              {
                subModuleName: "",
                create: true,
                read: true,
                update: true,
                delete: true,
                customeFilter: [
                  {
                    filter: { team: "jignesh" },
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                  },
                  {
                    filter: { UserName: "Akash" },
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      data: {
        options: {
          sortBy: "desc",
          populate: "",
          limit: 10,
          page: 1,
        },
        filter: [
          {
            // Applide filter
          },
        ],
      },
    },
  };
  
  module.exports = magicJson;
  
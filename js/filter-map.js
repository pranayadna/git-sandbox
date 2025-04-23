const sidebarMenu = [
  //Highlight
  {
    path: "/dashboard/highlight",
    icon: "far fa-th-large",
    title: "Highlights",
    children: [
      { path: "/dashboard/highlight/label-maker", title: "Label Maker" },
      { path: "/dashboard/highlight/oil-maker", title: "Oil Maker" },
      { path: "/dashboard/highlight/customer", title: "Customer" },
    ],
  },

  //Activities
  {
    path: "/dashboard/customer-activities",
    icon: "far fa-chart-bar",
    title: "Customer Activities",
  },

  //Reports
  {
    path: "/dashboard/reports",
    icon: "far fa-file-alt",
    title: "Reports",
    children: [
      { path: "/dashboard/reports/customer", title: "Report Customer" },
      { path: "/dashboard/reports/label-maker", title: "Report Label Maker" },
      { path: "/dashboard/reports/oil-maker", title: "Report Oil Maker" },
      { path: "/dashboard/reports/suspect", title: "Report Suspect" },
      { path: "/dashboard/reports/qrcode", title: "QR Code" },
      { path: "/dashboard/reports/summary-report", title: "Summary Report" },
      {
        path: "/dashboard/reports/not-found-report",
        title: "Not Found Report",
      },
    ],
  },

  //Settings
  {
    path: "/dashboard/settings",
    icon: "far fa-wrench",
    title: "Settings",
    children: [
      {
        path: "/dashboard/settings/log-history-activity",
        title: "Log History Activity",
      },
      {
        path: "/dashboard/settings/user-management",
        title: "User Management",
        children: [
          {
            path: "/dashboard/settings/user-management/dashboard-user",
            title: "Dashboard User",
          },
          {
            path: "/dashboard/settings/user-management/oil-maker-app",
            title: "Oil Maker App",
          },
          {
            path: "/dashboard/settings/user-management/penindakan-app",
            title: "Penindakan App",
          },
        ],
      },
    ],
  },
];

// const childrenSidebarMenu = sidebarMenu.map((menu) => menu.children);
const childrenSidebarMenu = sidebarMenu.filter((menu) =>
  Object.keys(menu).includes("children")
);

// .map((menu) =>
//   Object.entries(menu.children)
// );

const childrenChildrenSidebarMenu = childrenSidebarMenu.map(
  (menu) => menu.children
);

const filteredMenu = sidebarMenu.map((menu) => {
  // if (Object.keys(menu).includes("children")) {
  return {
    // ...menu,
    children: menu.children,
    // .filter(
    //   (menu) => menu.title !== "User Management"
    // ),
  };
  // }
});

// const filteredMenuNew = sidebarMenu.filter((menu) =>
//   menu.children.filter((menu) => menu.title !== "Dashboard User")
// );

const filteredMenuRevised = sidebarMenu.map((menu) => {
  return {
    ...menu,
    children:
      // {
      //   children:
      (menu.children || []).map((child) => {
        return {
          ...child,
          children: (child.children || []).filter(
            (child) => child.title !== "Dashboard User"
          ),
        };
      }),
    // },
  };
});

console.log("sidebar menu:", sidebarMenu);
console.log("children sidebar menu:", childrenSidebarMenu);
console.log("children children sidebar menu:", childrenChildrenSidebarMenu);
console.log("filtered menu:", filteredMenu);
// console.log("filtered menu new:", filteredMenuNew);
console.log("filtered menu revised:", filteredMenuRevised);

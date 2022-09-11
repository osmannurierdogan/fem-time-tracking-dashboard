const dashboard = Vue.createApp({
  data() {
    return {
      user: {
        image: "./images/image-jeremy.png",
        name: "Jeremy Robson",
      },
      dashboards: [],
      timeframe: "weekly",
    };
  },
  created() {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          this.dashboards.push(data[i]);
        }
      });
    console.log("dashboards :>> ", this.dashboards);
  },
});

// dashboard.component("dashboard-item", {
//   data() {
//     return {
//       dashboards: [],
//       item: {
//         title: null,
//         timeframes: {
//           daily: {
//             current: 15,
//             previous: 35,
//           },
//           weekly: {
//             current: 15,
//             previous: 35,
//           },
//           monthly: {
//             current: 15,
//             previous: 35,
//           },
//         },
//       },
//     };
//   },
//   created() {
//     fetch("./data.json")
//       .then((response) => response.json())
//       .then((data) => {
//         data.forEach((obj) => {
//           this.item = obj;
//           this.dashboards.push(this.item);
//           // this.item = data;
//           console.log(this.item);
//           console.log(this.dashboards);
//         });
//       });
//   },
//   template: `<div class="dashboard__item dashboard__item--work">
//     <div class="dashboard__item-header">
//       <h3 class="dashboard__item-title">Work</h3>
//       <button class="dashboard__item-button">
//         <img src="./images/icon-ellipsis.svg" alt="Ellipsis Icon" />
//       </button>
//     </div>
//     <h1 class="dashboard__item-current">
//       32hrs
//     </h1>
//     <p class="dashboard__item-previous">Last Week - 36hrs</p>
//   </div>`,
// });
dashboard.mount("#dashboard");

window.addEventListener("load", () => {
  document.querySelector("#app").style.display = "block";

  new Vue({
    el: "#app",
    data: {
      userName: "",
      conditions: {
        hideWhiteDivData: false,
        fromLeft: false,
        fromRight: false,
      },
      userForm: {
        idGmail: "",
        idText: "",
        idPassword: "",
      },
    },
    methods: {
      viwerGoSubmit(e) {
        if (e != "") {
          var strln1 = e.length;
          if (strln1 > 10) {
            var slc1 = e.slice(strln1 - 10, strln1);
            var mtc1 = "@gmail.com";
            var include1 = slc1.includes(mtc1);
            if (include1 == true) {
              
            } else {
              var alert_3 = "Please enter a valid gmail below!";
              alert(alert_3);
            }
          } else {
            var alert_2 = "Please enter a valid gmail below!";
            alert(alert_2);
          }
        } else {
          var alert_1 = "Please fill out the form below!";
          alert(alert_1);
        }
      },
      userGoSubmited(e1, e2) {
        if (e1 != "" && e2 != "") {
          console.log(e1, e2);
        } else {
          var alert_1 = "Please fill out the form below!";
          alert(alert_1);
        }
      },
      hideWhiteDiv(e) {
        if (e == 0 || e == 1) {
          this.conditions.hideWhiteDivData = true;
          if (e == 0) {
            this.conditions.fromLeft = true;
          } else if (e == 1) {
            this.conditions.fromRight = true;
          }
        }
      },
      changeTitleAndNavUsername() {
        db.collection("oneUser")
          .get()
          .then((data) => {
            data.docs.forEach((doc) => {
              this.userName = doc.data().name;
              document.title = this.userName;
              document.querySelector(".loadingContainer").style.display =
                "none";
            });
          });
      },
    },
    mounted() {
      this.changeTitleAndNavUsername();
    },
  });
});

$(document).ready(function() {
  var postId;
  getPostData(postId);

  // Getting jQuery references to the post all inputs
  var nameInput = $("#name");
  var emailInput = $("#email");
  var heightInput = $("#height");
  var weightInput = $("#weight");
  var ageInput = $("#age");
  var genderInput = $("#gender");
  var calbudgetInput = $("#calbudget");
  var indateInput = $("#indate");
  var caloriesInput = $("#calories");

  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (
      !emailInput.val().trim() ||
      !nameInput.val().trim() ||
      !heightInput.val().trim() ||
      !weightInput.val().trim() ||
      !ageInput.val().trim() ||
      !genderInput.val().trim() ||
      !calbudgetInput.val().trim()
    ) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      height: heightInput.val(),
      weight: weightInput.val(),
      age: ageInput.val(),
      gender: genderInput.val(),
      calbudget: calbudgetInput.val(),
      indate: indateInput.val(),
      calories: caloriesInput.val()
    };
    console.log(newPost);

    submitPost(newPost);
  });

  // Submits a new post and brings user to new signup page
  function submitPost(Post) {
    $.post("/api/posts/index", Post, function() {
      window.location.href = "/index";
    });
  }

  // Gets post data for a post if we're editing
  function getPostData(id) {
    $.get("/api/posts/page2/" + id, function(data) {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        titleInput.val(data.title);

        nameInput.val(data.name);
        emailInput.val(data.email);
        heightInput.val(data.height);
        weightInput.val(data.weight), ageInput.val(data.age);
        genderInput.val(data.gender);
        calbudgetInput.val(data.calbudget);
        indateInput.val(data.indate);
        caloriesInput.val(data.calories);
      }
    });
  }
});

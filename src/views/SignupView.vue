<script setup>

</script>

<template>
<main class="form-signin w-100 m-auto">
  <form data-bitwarden-watching="1">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="text" class="form-control" id="floatingFirstName" placeholder="First name">
      <label for="floatingFirstName">First name</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingLastName" placeholder="Name">
      <label for="floatingLastName">Name</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>

    <div class="form-check text-start my-3">
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingConfirmPassword" placeholder="Confirm Password">
      <label for="floatingConfirmPassword">Confirm Password</label>
    </div>

    <div class="form-check text-start my-3">
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit">Sign up</button>
    <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
  </form>
</main>
</template>

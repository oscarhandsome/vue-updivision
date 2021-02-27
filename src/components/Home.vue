<template>
    <div class="container">
      <h1>Home page</h1>
      <h4>{{ msg }}</h4>
      <h5>Tech task for updivison</h5>
      <hr>
      Done:
      <pre>
        - Login page - UI
        - Register page - UI
        - Products page- UI
        - Popup- UI
        - Routing
        - Relation between components
        - Partly mobile UI adaptive
        - A little bit animations
        - Issue with mutation on popup
      </pre>
      <hr>
      Not done:
      <pre>
      - Validation or the forms
      </pre>

    Time spent:
    <pre>
      ~ 6 hours
    </pre>
    Conclusion:
    <pre>
      ...
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Uppdivision',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

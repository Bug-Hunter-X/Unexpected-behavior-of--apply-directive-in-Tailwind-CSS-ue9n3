```javascript
// solution with direct tailwindcss classes
div {
  text-red-500
}
/*or*/
// solution with a more specific selector or overriding specificity
.my-class div {
  @apply text-red-500;
}
```
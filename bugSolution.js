```javascript
// Solution: Add !important to the hover class to override other styles.
<div class="bg-red-500 hover:bg-red-700 !important">
  Hover over me
</div>
// or use a more specific selector
<div class="bg-red-500 hover:bg-red-700">
  Hover over me
</div>
<style>
  .bg-red-500:hover {
    @apply bg-red-700;
  }
</style> 
```
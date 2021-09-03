<template>
  <footer>
    <div>
      <div><slot name="logo"></slot></div>
      <div>{{ slogan }}</div>
      <div>
        <span>FB</span>
        <span>LI</span> 
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HFooter",

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["click"],

  setup(props, context) {
    const onClick = (event: any) => {
      context.emit("click", event);
    };

    return {
      isDisabled: props.disabled,
      onClick,
    };
  },
});
</script>

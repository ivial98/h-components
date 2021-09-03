<template>
  <header class="flex border-b border-grey-600 p-4 gap-4">
    <div>
      <slot name="header-logo"></slot>
    </div>
    <div>
      <slot name="header-name"></slot>
    </div>
    <div class="header-left">
      <slot name="header-left"></slot>
    </div>
    <div class="header-right">
      <slot name="header-right"></slot>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HHeader",

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

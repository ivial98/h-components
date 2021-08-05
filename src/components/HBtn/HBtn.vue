<template>
  <button :disabled="isDisabled" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'HBtn',
  
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  emits:['click'],

  setup(props, context) {
    const onClick = (event: any) => {
      context.emit("click", event)
    } 

    return {
      isDisabled: props.disabled,
      onClick
    }
  }
});
</script>

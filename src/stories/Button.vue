<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script>
import './button.css';
import { reactive, computed } from 'vue';

export default {
  name: 'stove-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'secondary', 'ghost'].indexOf(value) !== -1;
      },
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'stove-button': true,
        'stove-button--primary': props.type === 'primary',
        'stove-button--secondary': props.type === 'secondary',
        'stove-button--ghost': props.type === 'ghost',
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>

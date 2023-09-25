// Utilities
import { defineComponent } from 'vue';
import { convertToUnit, propsFactory } from '@/util';

type AXTableProps = {
  default: never;
  top: never;
  bottom: never;
  wrapper: never;
};

export const makeVTableProps = propsFactory({
  tag: String,
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
});

export const AXTable = defineComponent({
  name: 'AXTable',

  props: {
    ...makeVTableProps({
      tag: 'table',
    }),
  },

  setup(props, { slots }) {
    return () => (
      <props.tag class={[props.class]} style={props.style}>
        {slots.top?.()}

        {slots.default ? (
          <div style={{ height: convertToUnit(props.height) }}>
            <table>{slots.default()}</table>
          </div>
        ) : (
          slots.wrapper?.()
        )}

        {slots.bottom?.()}
      </props.tag>
    );

    return {};
  },
});

export type AXTable = InstanceType<typeof AXTable>;

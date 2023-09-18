// Essentials
import { ui } from 'tailwind-config';
import { defineFunctionalComponent, convertToUnit } from '@/util';

// Types
import type { PropType } from 'vue';

const tableUI = ui.table;

export const AXDataTableColumn = defineFunctionalComponent(
  {
    align: {
      type: String as PropType<'start' | 'center' | 'end'>,
      default: 'start',
    },
    fixed: Boolean,
    fixedOffset: [Number, String],
    height: [Number, String],
    lastFixed: Boolean,
    noPadding: Boolean,
    tag: String,
    width: [Number, String],
  },
  (props, { slots, attrs }) => {
    const Tag = props.tag ?? 'td';
    return (
      <Tag
        class={[
          tableUI.td.base,
          tableUI.td.padding,
          tableUI.td.color,
          tableUI.td.font,
          tableUI.td.size,
        ]}
        style={{
          height: convertToUnit(props.height),
          width: convertToUnit(props.width),
          left: convertToUnit(props.fixedOffset || null),
        }}
        {...attrs}
      >
        {slots.default?.()}
      </Tag>
    );
  }
);

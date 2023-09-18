// Types
import {
  FunctionalComponent,
  ComponentObjectPropsOptions,
  ExtractDefaultPropTypes,
  ExtractPropTypes,
} from 'vue';

export function defineFunctionalComponent<
  T extends FunctionalComponent<Props>,
  PropsOptions = ComponentObjectPropsOptions,
  Defaults = ExtractDefaultPropTypes<PropsOptions>,
  Props = Readonly<ExtractPropTypes<PropsOptions>>
>(
  props: PropsOptions,
  render: T
): FunctionalComponent<Partial<Defaults> & Omit<Props, keyof Defaults>> {
  render.props = props as any;
  return render as any;
}

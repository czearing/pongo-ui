import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { PortalProps } from '@fluentui/react-portal';

/**
 * Events handled by the Dialog.
 */
export type OpenDialogEvents =
  | MouseEvent
  | TouchEvent
  | React.MouseEvent<HTMLElement>
  | React.KeyboardEvent<HTMLElement>
  | React.FocusEvent<HTMLElement>;

/**
 * Data attached to open/close events
 */
export type OnOpenChangeData = { open: boolean };

export type DialogSlots = {
  /**
   * The root of the Dialog.
   */
  root: Slot<'div'>;

  /**
   * The dialogBox that the content is rendered within.
   */
  dialogBox?: Slot<'div'>;

  /**
   * The background color behind the Dialog card.
   */
  background?: Slot<'div'>;
};

type DialogCommons = Pick<PortalProps, 'mountNode'> & {
  /**
   * Controlled value to handle the opening of the Dialog.
   */
  open: boolean;

  /**
   * Call back when the component requests to change value
   * The `open` value is used as a hint when directly controlling the component
   */
  onOpenChange?: (ev: OpenDialogEvents, data: OnOpenChangeData) => void;
};

export type DialogProps = ComponentProps<DialogSlots> & DialogCommons;

export type DialogState = ComponentState<DialogSlots> & DialogCommons;

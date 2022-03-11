import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { ToolbarState } from './Toolbar.types';
import { tokens } from '@pongo-ui/react-theme';

export const useRootStyles = makeStyles({
  root: {
    position: 'fixed',
    height: '48px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxSizing: 'border-box',
    flexShrink: 0,
    backgroundColor: tokens.brand,
    filter: tokens.elevate,

    '>*': {
      color: 'white !important',
      fill: 'white !important',
    },
  },

  contentPadding: {
    ...shorthands.padding('0px', '20px'),
  },
});

export const useToolbarStyles = (state: ToolbarState) => {
  const { contentPadding } = state;
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    contentPadding && rootStyles.contentPadding,
    state.root.className,
  );

  return state;
};

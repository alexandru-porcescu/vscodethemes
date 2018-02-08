import { css } from 'emotion'
import * as React from 'react'
import theme, { em } from '../theme'
import { collapseWidth } from './App.styles'

interface CheckboxProps {
  checked: boolean
  onChange: (value: boolean) => any
}

const Checkbox: React.SFC<CheckboxProps> = ({
  checked,
  onChange,
  children,
}) => (
  <label className={classes.label}>
    <input
      type="checkbox"
      checked={checked}
      onChange={evt => onChange(evt.target.checked)}
      className={classes.input}
    />
    <div className={classes.text}>{children}</div>
  </label>
)

Checkbox.defaultProps = {
  checked: false,
}

const classes = {
  label: css({
    display: 'flex',
    alignItems: 'center',
    marginBottom: em(theme.gutters.sm),
    marginRight: em(theme.gutters.sm),
    cursor: 'pointer',

    [`@media (max-width: ${collapseWidth}px)`]: {
      marginBottom: 0,
      marginRight: em(theme.gutters.sm),
      minWidth: em(100),
    },
  }),

  text: css({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    fontSize: em(theme.fontSizes.md),
    color: theme.colors.text,
  }),

  input: css({
    margin: 0,
    marginRight: em(theme.gutters.sm),
  }),
}

export default Checkbox

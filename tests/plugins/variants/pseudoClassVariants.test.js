import { css, quickVariantPluginTest } from '../../util/run'

quickVariantPluginTest('pseudoClassVariants').toMatchFormattedCss(css`
  .first\:flex:first-child,
  .last\:flex:last-child,
  .only\:flex:only-child,
  .odd\:flex:nth-child(odd),
  .even\:flex:nth-child(2n),
  .first-of-type\:flex:first-of-type,
  .last-of-type\:flex:last-of-type,
  .only-of-type\:flex:only-of-type,
  .visited\:flex:visited,
  .target\:flex:target,
  .open\:flex[open],
  .default\:flex:default,
  .checked\:flex:checked,
  .indeterminate\:flex:indeterminate,
  .placeholder-shown\:flex:placeholder-shown {
    display: flex;
  }
  .autofill\:flex:-webkit-autofill {
    display: flex;
  }
  .autofill\:flex:autofill {
    display: flex;
  }
  .optional\:flex:optional,
  .required\:flex:required,
  .valid\:flex:valid,
  .invalid\:flex:invalid,
  .in-range\:flex:in-range,
  .out-of-range\:flex:out-of-range,
  .read-only\:flex:read-only,
  .empty\:flex:empty,
  .focus-within\:flex:focus-within,
  .hover\:flex:hover,
  .focus\:flex:focus {
    display: flex;
  }
  .focus-visible\:flex:focus-visible {
    display: flex;
  }
  .active\:flex:active,
  .enabled\:flex:enabled,
  .disabled\:flex:disabled,
  .group:first-child .group-first\:flex,
  .group:last-child .group-last\:flex,
  .group:only-child .group-only\:flex,
  .group:nth-child(odd) .group-odd\:flex,
  .group:nth-child(2n) .group-even\:flex,
  .group:first-of-type .group-first-of-type\:flex,
  .group:last-of-type .group-last-of-type\:flex,
  .group:only-of-type .group-only-of-type\:flex,
  .group:visited .group-visited\:flex,
  .group:target .group-target\:flex,
  .group[open] .group-open\:flex,
  .group:default .group-default\:flex,
  .group:checked .group-checked\:flex,
  .group:indeterminate .group-indeterminate\:flex,
  .group:placeholder-shown .group-placeholder-shown\:flex {
    display: flex;
  }
  .group:-webkit-autofill .group-autofill\:flex {
    display: flex;
  }
  .group:autofill .group-autofill\:flex {
    display: flex;
  }
  .group:optional .group-optional\:flex,
  .group:required .group-required\:flex,
  .group:valid .group-valid\:flex,
  .group:invalid .group-invalid\:flex,
  .group:in-range .group-in-range\:flex,
  .group:out-of-range .group-out-of-range\:flex,
  .group:read-only .group-read-only\:flex,
  .group:empty .group-empty\:flex,
  .group:focus-within .group-focus-within\:flex,
  .group:hover .group-hover\:flex,
  .group:focus .group-focus\:flex {
    display: flex;
  }
  .group:focus-visible .group-focus-visible\:flex {
    display: flex;
  }
  .group:active .group-active\:flex,
  .group:enabled .group-enabled\:flex,
  .group:disabled .group-disabled\:flex,
  .peer:first-child ~ .peer-first\:flex,
  .peer:last-child ~ .peer-last\:flex,
  .peer:only-child ~ .peer-only\:flex,
  .peer:nth-child(odd) ~ .peer-odd\:flex,
  .peer:nth-child(2n) ~ .peer-even\:flex,
  .peer:first-of-type ~ .peer-first-of-type\:flex,
  .peer:last-of-type ~ .peer-last-of-type\:flex,
  .peer:only-of-type ~ .peer-only-of-type\:flex,
  .peer:visited ~ .peer-visited\:flex,
  .peer:target ~ .peer-target\:flex,
  .peer[open] ~ .peer-open\:flex,
  .peer:default ~ .peer-default\:flex,
  .peer:checked ~ .peer-checked\:flex,
  .peer:indeterminate ~ .peer-indeterminate\:flex,
  .peer:placeholder-shown ~ .peer-placeholder-shown\:flex {
    display: flex;
  }
  .peer:-webkit-autofill ~ .peer-autofill\:flex {
    display: flex;
  }
  .peer:autofill ~ .peer-autofill\:flex {
    display: flex;
  }
  .peer:optional ~ .peer-optional\:flex,
  .peer:required ~ .peer-required\:flex,
  .peer:valid ~ .peer-valid\:flex,
  .peer:invalid ~ .peer-invalid\:flex,
  .peer:in-range ~ .peer-in-range\:flex,
  .peer:out-of-range ~ .peer-out-of-range\:flex,
  .peer:read-only ~ .peer-read-only\:flex,
  .peer:empty ~ .peer-empty\:flex,
  .peer:focus-within ~ .peer-focus-within\:flex,
  .peer:hover ~ .peer-hover\:flex,
  .peer:focus ~ .peer-focus\:flex {
    display: flex;
  }
  .peer:focus-visible ~ .peer-focus-visible\:flex {
    display: flex;
  }
  .peer:active ~ .peer-active\:flex,
  .peer:enabled ~ .peer-enabled\:flex,
  .peer:disabled ~ .peer-disabled\:flex {
    display: flex;
  }
`)

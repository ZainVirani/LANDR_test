/**
 * I had a weird type error with Formik and this was the only fix
 */
declare namespace React {
  type StatelessComponent<P> = React.FunctionComponent<P>;
}

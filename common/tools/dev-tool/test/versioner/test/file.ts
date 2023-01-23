function test_include() {
  //@alpha
  //@beta
  //@public
  const all: string = "alpha, beta, and public releases should have this declaration";
  //@alpha
  const individual: string | null = "only alpha releases should have this declaration";
  //@beta
  const individual: string | undefined = "only beta releases should have this declaration";
  //@public
  const individual = "only public releases should have this declaration";
  //@alpha
  // @beta
  const pair = "only public releases should omit this declaration";
  //@public
  const pair = "this declaration shouldn't conflict with the above declaration";

  const jsDoc = () => {
    /**
     * @alpha
     * @beta
     * @public
     */
    const all = "alpha, beta, and public releases should have this declaration";
    /**
     * @alpha
     * */
    const individual = "only alpha releases should have this declaration";
    /**
     * @beta
     * */
    const individual = "only beta releases should have this declaration";
    /**
     * @public
     */
    const individual = "only public releases should have this declaration";
    /**
     * @alpha
     * @beta
     */
    const pair = "only public releases should omit this declaration";
    /**
     * @public
     */
    const pair = "this declaration shouldn't conflict with the above declaration";
  };
}

function test_non_null() {
  //@alpha non-null
  //@beta non-null
  const union: string | number | null = "";
  //@alpha non-null
  //@beta non-null
  let null_declaration: null;
  const jsDoc = () => {
    /**
     * @alpha non-null
     * @beta non-null
     */
    const union: string | number | null = "";
    /**
     * @alpha non-null
     * @beta non-null
     */
    let null_declaration: null;
  };
}

function test_include_doc() {
  /**
   * JSDoc test
   * @alpha doc
   * These directives are (currently) unsupported on adjacent lines.
   * @beta doc
   * beta
   * @public doc
   * public
   * @alpha doc
   * @return alpha
   * @beta doc
   * @return beta
   */
  const test = "";
}

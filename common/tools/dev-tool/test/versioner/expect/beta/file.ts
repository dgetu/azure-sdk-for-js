function test_include() {
  //@alpha
  //@beta
  //@public
  const all: string = "alpha, beta, and public releases should have this declaration";
  //@beta
  const individual: string | undefined = "only beta releases should have this declaration";
  //@alpha
  // @beta
  const pair = "only public releases should omit this declaration";

  const jsDoc = () => {
    /**
     * @alpha
     * @beta
     * @public
     */
    const all = "alpha, beta, and public releases should have this declaration";
    /**
     * @beta
     * */
    const individual = "only beta releases should have this declaration";
    /**
     * @alpha
     * @beta
     */
    const pair = "only public releases should omit this declaration";
  };
}

function test_non_null() {
  //@alpha non-null
  //@beta non-null
  const union: string | number = "";
  //@alpha non-null
  //@beta non-null
  let null_declaration: never;
  const jsDoc = () => {
    /**
     * @alpha non-null
     * @beta non-null
     */
    const union: string | number = "";
    /**
     * @alpha non-null
     * @beta non-null
     */
    let null_declaration: never;
  };
}

function test_include_doc() {
  /**
   * JSDoc test
   * beta
   * @return beta
   */
  const test = "";
}

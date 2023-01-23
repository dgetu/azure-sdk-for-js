function test_include() {
  //@alpha
  //@beta
  //@public
  const all: string = "alpha, beta, and public releases should have this declaration";
  //@public
  const individual = "only public releases should have this declaration";
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
     * @public
     */
    const individual = "only public releases should have this declaration";
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
   * public
   */
  const test = "";
}

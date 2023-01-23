function initializeWidget()
{
	/*
	 * Subscribe to the EmbeddedApp onPageLoad event before initializing the widget 
	 */
	ZOHO.embeddedApp.on("PageLoad",function(data)
	{
		/*
		 * Fetch Current User Information from CRM
		 * and insert the response into the dom
		 */
		ZOHO.CRM.CONFIG.getCurrentUser()
		.then(function(response)
		{
            console.log(response);
            localStorage.setItem("Usuario", JSON.stringify(response,null,2));
		});
		
	})
	/*
	 * initialize the widget.
	 */
	ZOHO.embeddedApp.init();
}
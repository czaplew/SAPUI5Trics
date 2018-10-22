
		handleChangeDate: function (oEvent) {
			var oDP = oEvent.oSource;
			var bValid = oEvent.getParameter("valid");
			if (bValid) {
				oDP.setValueState(sap.ui.core.ValueState.None);
			} else {
				oDP.setValueState(sap.ui.core.ValueState.Error);
			}
		},

		_validateForm: function (oEvent) {
			var bValidationError = false;
			var aForms = this.getView().byId("FormChange354").getFormContainers()[0].getAggregation("formElements");
			aForms.forEach((oObject) => {
				if (oObject.getFields()[0].getRequired()) {
					var oInput = oObject.getFields()[0];
					var sValue = oInput.getValue();
					if (sValue !== "") {
						oInput.setValueState("None");
					} else {
						oInput.setValueState("Error");
						bValidationError = true;
					}
				}
			});

			return !bValidationError;

		},

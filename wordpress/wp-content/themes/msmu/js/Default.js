
function updateHiddenValue(ddlContent, hdnSpotligbtBoxId) {
	var hdnSpotligbtBox = document.getElementById(hdnSpotligbtBoxId);
	hdnSpotligbtBox.value = ddlContent.value;
}

function updateTooltip(ddl) {
	ddl.title = ddl.options[ddl.selectedIndex].text;
}

function rblImageSource_selectedIndexChanged(ctlTable) {
	var lastUnder = ctlTable.id.lastIndexOf('_');

	var trCollecionId = ctlTable.id.substr(0, lastUnder) + '_trCollection';
	var trSmartFormId = ctlTable.id.substr(0, lastUnder) + '_trSmartForm';
	var trFolderId = ctlTable.id.substr(0, lastUnder) + '_trFolder';

	var trCollection = document.getElementById(trCollecionId);
	var trSmartForm = document.getElementById(trSmartFormId);
	var trFolder = document.getElementById(trFolderId);

	for (var i = 0; i < ctlTable.rows[0].cells.length; i++) {
		var ctlRadio = ctlTable.rows[0].cells[i].children[0];
		if (ctlRadio.checked) {
			if (ctlRadio.value == 'Collection') {
				trCollection.style.display = 'block';
				trSmartForm.style.display = 'none';
				trFolder.style.display = 'none';
			}
			else if (ctlRadio.value == 'Smart Form') {
				trCollection.style.display = 'none';
				trSmartForm.style.display = 'none';
				trFolder.style.display = 'block';
			}
			else {
				trCollection.style.display = 'none';
				trSmartForm.style.display = 'block';
				trSmartForm.style.height = '27px';
				trFolder.style.display = 'block';

				var ddlFolderId = ctlTable.id.substr(0, lastUnder) + '_ddlFolder';
				var ddlFolder = document.getElementById(ddlFolderId);
				ddlFolder.selectedIndex = 0;
			}
		}
	}
}

function displayWait() {
	var id = '#dialog';

	//Get the screen height and width
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();

	// hack it if you need to
	if ($('#divContents').css('height') != null) {
		maskHeight = $('#divContents').css('height');
		maskWidth = $('#divContents').css('width');
	}

	//Set height and width to mask to fill up the whole screen
	$('#mask').css({ 'width': maskWidth, 'height': maskHeight });

	//transition effect		
	$('#mask').fadeIn(1000);
	$('#mask').fadeTo("slow", 0.8);

	//Get the window height and width
	var winH = $(window).height();
	var winW = $(window).width();

	//Set the popup window to center
	$(id).css('top', winH / 2 - $(id).height() / 2);
	$(id).css('left', winW / 2 - $(id).width() / 2);

	//transition effect
	$(id).fadeIn(2000);
}

function hideWait() {
	$('#mask, .window').hide();
}

function handleDateSelectionChanged(oCalendarBehavior) {
	oCalendarBehavior.hide();
	var oTextBox = oCalendarBehavior.get_element();
	var oElementList = document.forms[0].elements;
	for (var i = 0; i < oElementList.length; i++) {
		if (oElementList[i].tagName.toUpperCase() == "INPUT" && oElementList[i].id == oTextBox.id) {
			for (var j = i + 1; j < oElementList.length; j++) {
				oTextBox = oElementList[j];
				break;
			}
			break;
		}
	}
	oTextBox.focus();
	if (oTextBox.type == "textbox") oTextBox.select();
}
function chgPageToShow(ctlPageNumberId, pageStart, pageCount, itemsPerPage) {
	var pageNumber = prompt('Page ' + pageStart + ' of ' + pageCount + ' (' + itemsPerPage + ' items per page).\nJump to page:', '1');
	if (!isNaN(pageNumber) && pageNumber > 0 && pageNumber <= pageCount) {
		var ctlPageNumber = document.getElementById(ctlPageNumberId);
		ctlPageNumber.value = pageNumber;
		return true;
	}
	else {
		return false;
	}
}

function chgNumToShow(ctlPageNumberId, itemCount, itemsPerPage) {
	var pageSize = prompt(itemCount + ' records found (' + itemsPerPage + ' per page).\nChange per page count to:', '20')
	if (!isNaN(pageSize) && pageSize > 0) {
		var ctlPageNumber = document.getElementById(ctlPageNumberId);
		ctlPageNumber.value = pageSize;
		return true;
	}
	else {
		return false;
	}
}

function updateSearchDefaults(txtTitleId, txtStartId, txtEndId, txtContentId, defaultTitle, defaultStart, defaultEnd, defaultContent) {
	var txtTitle = document.getElementById(txtTitleId);
	var txtStart = document.getElementById(txtStartId);
	var txtEnd = document.getElementById(txtEndId);
	var txtContent = document.getElementById(txtContentId);

	var title = trimText(txtTitle);
	var start = trimText(txtStart);
	var end = trimText(txtEnd);
	var content = trimText(txtContent);

	if (title.length == 0) {
		txtTitle.value = defaultTitle;
	}
	if (start.length == 0) {
		txtStart.value = defaultStart;
	}
	if (end.length == 0) {
		txtEnd.value = defaultEnd;
	}
	if (content.length == 0) {
		txtContent.value = defaultContent;
	}
}

function trimText(txt) {
	var value = txt.value;
	for (var i = 0; i < value.length; i++) {
		if (value[0] == ' ' || value[0] == ' ') {
			value = value.substr(1, value.length - 1);
		}
		else {
			break;
		}
	}
	for (var i = 0; i < value.length; i++) {
		if (value[value.length - 1] == ' ' || value[value.length - 1] == ' ') {
			value = value.substr(0, value.length - 2);
		}
		else {
			break;
		}
	}
	return value;
}

function changeOneRadioButton(contentId, rbName, wasRbChecked, hdnDisplayDetailId) {
	//debugger;
	var hdnDisplayDetail = document.getElementById(hdnDisplayDetailId);
	var details = hdnDisplayDetail.value;

	hdnDisplayDetail.value = '';

	var rowArray = details.split('##');
	for (var i = 0; i < rowArray.length; i++) {

		var columnArray = rowArray[i].split('|');
		var displayType = columnArray[columnArray.length - 1];

		if (contentId == columnArray[0]) {

			if (rbName == 'rbPopup') {
				displayType = wasRbChecked ? 'Detail' : 'Popup';
			}
			else {
				displayType = wasRbChecked ? 'Popup' : 'Detail';
			}
		}
		for (var j = 0; j < columnArray.length - 1; j++) {
			hdnDisplayDetail.value += columnArray[j] + '|';
		}
		hdnDisplayDetail.value += displayType + '##';
	}
	if (hdnDisplayDetail.value.length > 0) {
		hdnDisplayDetail.value = hdnDisplayDetail.value.substr(0, hdnDisplayDetail.value.length - 2);
	}
}

function getFolderPages(ddlFolderId, ddlPageId) {
	var folderId = document.getElementById(ddlFolderId).value;

	$.ajax({
		contentType: "application/json; charset=utf-8",
		url: "/widgets/msmu/Common/DataAccess/Default.ashx?action=GetFolderPages&FolderID=" + folderId,
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			alert('getCSV - get: Error loading -- Status: ' + textStatus + ', errorThrown: ' + errorThrown);
		},
		success: function (data) {
			var ddlPage = document.getElementById(ddlPageId);
			ddlPage.options.length = 0;

			var option = document.createElement('option');
			option.value = "0";
			option.innerHTML = "Select One";
			ddlPage.appendChild(option);

			var optionArray = data.split('##');
			for (var i = 0; i < optionArray.length; i++) {
				var attrArray = optionArray[i].split('|');
				if (attrArray[0].length > 0) {
					option = document.createElement('option');
					option.value = attrArray[0];
					option.innerHTML = attrArray[1];
					ddlPage.appendChild(option);
				}
			}
		}
	});
}

function updateDetailCheckBoxes(gvDetailEditId, rbPopupId, rbDetailId, hdnDisplayDetailId) {
	var gvDetailEdit = document.getElementById(gvDetailEditId);
	var rbPopup = document.getElementById(rbPopupId);
	var rbDetail = document.getElementById(rbDetailId);
	var hdnDisplayDetail = document.getElementById(hdnDisplayDetailId);

	buildDetailTable(gvDetailEditId, hdnDisplayDetail.value, hdnDisplayDetailId, rbPopup.checked)
}

function buildDetailTable(gvDetailEditId, data, hdnDisplayDetailId, isPopupAll) {
	var hdnDisplayDetail = document.getElementById(hdnDisplayDetailId);
	hdnDisplayDetail.value = '';

	var gvDetailEdit = document.getElementById(gvDetailEditId);

	//debugger;
	var oldTbody = gvDetailEdit.getElementsByTagName('tbody')[0];
	var tbody = document.createElement('tbody');
	oldTbody.parentNode.replaceChild(tbody, oldTbody);

	var row = document.createElement('tr');

	var header = document.createElement('th');
	header.innerHTML = "Detail Diplay Type";
	header.align = 'left';
	header.style.width = "188px";
	row.appendChild(header);

	header = document.createElement('th');
	header.innerHTML = "Title";
	header.align = 'left';
	header.style.width = "400px";
	row.appendChild(header);

	tbody.appendChild(row);

	var rowArray = data.split('##');
	for (var i = 0; i < rowArray.length; i++) {

		row = document.createElement('tr');
		var columnArray = rowArray[i].split('|');

		if (columnArray[0].length > 0) {

			row.id = columnArray[0];

			var isPopup = false;
			if (columnArray.length == 4) {
				isPopup = columnArray[3] == 'Popup' ? true : false;
			}
			else {
				isPopup = columnArray[2] == 'Yes' ? true : false;
			}

			if (isPopupAll.length != 0) {
				isPopup = isPopupAll;
			}

			var cell = document.createElement('td');

			var input = document.createElement('input');
			input.type = 'radio';
			input.id = 'rbPopup' + i;
			input.name = 'displayType' + i;
			input.value = 'rbPopup';
			if (isPopup) {
				input.defaultChecked = true;
			}
			input.setAttribute("onchange", "return changeOneRadioButton('" + columnArray[0] + "', '" + input.value + "', " + input.checked + ", '" + hdnDisplayDetailId + "')");
			cell.appendChild(input);
			var label = document.createElement('label');
			label.innerHTML = 'Popup&nbsp;';
			cell.appendChild(label);

			input = document.createElement('input');
			input.id = 'rbDetail' + i;
			input.type = 'radio';
			input.name = 'displayType' + i;
			input.value = 'rbDetail';
			if (!isPopup) {
				input.defaultChecked = true;
			}
			input.setAttribute("onchange", "return changeOneRadioButton('" + columnArray[0] + "', '" + input.value + "', " + input.checked + ", '" + hdnDisplayDetailId + "')");
			cell.appendChild(input);
			var label = document.createElement('label');
			label.innerHTML = 'Detail Page';
			cell.appendChild(label);

			row.appendChild(cell);

			cell = document.createElement('td');
			var label = document.createElement('label');
			label.innerHTML = columnArray[1];
			cell.appendChild(label);

			row.appendChild(cell);

			cell = document.createElement('td');
			var label = document.createElement('label');
			label.innerHTML = columnArray[2] == 'Yes' ? columnArray[2] : '';
			cell.appendChild(label);

			row.appendChild(cell);

			tbody.appendChild(row);

			var displayType = isPopup ? 'Popup' : 'Detail';
			hdnDisplayDetail.value += columnArray[0] + '|' + columnArray[1] + '|' + displayType + '##';
		}
	}
	if (hdnDisplayDetail.value.length > 0) {
		hdnDisplayDetail.value = hdnDisplayDetail.value.substr(0, hdnDisplayDetail.value.length - 2);
	}
}

function updateGridSortingOrder(ddl, hdnId) {
	var hdn = document.getElementById(hdnId);
	var arrSort = hdn.value.split(':');
	var ddlId = ddl.id.substr(ddl.id.indexOf('ddl'));
	var index = ddlId.substr(ddlId.indexOf('_') + 1);
	index = parseInt(index);
	var pair = arrSort[index];
	if (ddlId.indexOf('Expression') != -1) {
		var direction = pair.substr(pair.indexOf(','));
		pair = ddl.value + direction;
	}
	else {
		var expression = pair.substr(0, pair.indexOf(',') + 1);
		pair = expression + ddl.value;
		ddl.title = ddl.value;
	}
	arrSort[index] = pair;
	hdn.value = '';
	for (var i = 0; i < arrSort.length; i++) {
		hdn.value += arrSort[i] + ':';
	}
	hdn.value = hdn.value.substr(0, hdn.value.length - 1);
}

function moveItemUp(prefix, direction) {
	selectedItem = null;
	var coloredButtonParent = document.getElementById(prefix + 'ReorderList1__rbl');

	getSelectedRadio(coloredButtonParent.childNodes, false);

	if (selectedItem != null) {
		var isOkUp = (isIE && selectedItem != coloredButtonParent.firstChild) || (!isIE && selectedItem != coloredButtonParent.firstChild.nextSibling);
		var isTop = (isIE && selectedItem == coloredButtonParent.firstChild) || (!isIE && selectedItem == coloredButtonParent.firstChild.nextSibling);
		if (direction == 'up' && isOkUp && !isTop) {
			var previousSibling = selectedItem.previousSibling;
			coloredButtonParent.insertBefore(selectedItem, previousSibling);
		}
		else if (direction == 'down') {
			var isNextToLast = (isIE && selectedItem == coloredButtonParent.lastChild.previousSibling) || (!isIE && selectedItem == coloredButtonParent.lastChild.previousSibling.previousSibling);
			var isLast = (isIE && selectedItem == coloredButtonParent.lastChild) || (!isIE && selectedItem == coloredButtonParent.lastChild.previousSibling);
			if (isNextToLast) {
				if (isIE) {
					coloredButtonParent.appendChild(selectedItem);
				}
				else {
					coloredButtonParent.insertBefore(selectedItem, coloredButtonParent.lastChild);
				}
			}
			else if (!isLast) {
				var nextSibling = selectedItem.nextSibling.nextSibling;
				coloredButtonParent.insertBefore(selectedItem, nextSibling);
			}
		}
	}

	return false;
}

function getSelectedRadio(childNodes, doUncheck) {
	for (var i = 0; i < childNodes.length; i++) {
		var ctl = childNodes[i];
		if (ctl.tagName != null && ctl.tagName.toLowerCase() == "input" && ctl.id == 'rabSelectItem') {
			if (ctl.checked) {
				if (doUncheck) {
					ctl.checked = false;
				}
				else {
					selectedItem = ctl.parentNode.parentNode.parentNode;
				}
			}
		}
		if (ctl.firstChild != null) {
			getSelectedRadio(ctl.childNodes, doUncheck);
		}
	}
}

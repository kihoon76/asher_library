function FileUpload(fileId, url, config) {
	var that = this;
	this._url = url;
	this._$file = $(fileId);
	this._param = null;
	
	var mergeConfig = $.extend({}, {
		url: Utils.getPath(url),
		fileName: 'file',
		showCancel: true,
		showDone: true,
		autoSubmit: false,
		showPreview: true,
		maxFileCount: 1,
		returnType: 'json',
		dynamicFormData: function() {
            return that._param;
        },
		onSelect: function(files) {
			if(that._selectedFiles[files[0].name]) {
	            Utils.showExtConfirm({
	            	type:'alert',
	            	msg:'같은 파일이 있습니다.'
	            });
	            return false;
	        }
			
			that._selectedFiles[files[0].name] = files[0];
			return true;
		},
		onError: function(files, status, errMsg, pd) {
			that.reset();
			Utils.showExtConfirm({
            	type:'alert',
            	msg:errMsg
            });
		},
		onCancel: function(files) {
			 delete that._selectedFiles[files[0].name];
		}
		
	}, config);
	
	this._$file.uploadFile(mergeConfig);
	this._selectedFiles = {};
}

FileUpload.prototype.reset = function() {
	this._$file.reset();
	this._selectedFiles = {};
}

FileUpload.prototype.hasFile = function() {
	for(var k in this._selectedFiles) {
        if(this._selectedFiles[k]) return true;
    }

    return false;
}

FileUpload.prototype.setParam = function(param) {
	this._param = param;
}

FileUpload.prototype.getParam = function() {
	return this._param;
}

FileUpload.prototype.save = function() {
	var that = this;
	if(this.hasFile()) {
		this._$file.startUpload();
    }
    else {
    	hotplace.ajax({
    		url: that._url,
    		contentType: 'application/json',
            data: JSON.stringify(that.getParam()),
            success: function(data, textStatus, jqXHR) {
                if(!data.success) {
                	
                }
                else {
                	//_saveMaemulSuccess();
                }
                
            }
    	});
    }
}


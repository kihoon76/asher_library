package com.asher.controller;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.asher.util.CommonUtil;

@RequestMapping("/ckeditor")
@Controller
public class CkeditorController {

	private static final Logger log = LoggerFactory.getLogger(CkeditorController.class);
	
	@Value("#{pathCfg['upload_root']}")
	private String uploadRoot;
	
	@PostMapping("fileUpload")
	@ResponseBody
	public String fileUpload(HttpServletRequest request) {
		MultipartHttpServletRequest multipartHttpServletRequest = (MultipartHttpServletRequest)request;
	    Iterator<String> iterator = multipartHttpServletRequest.getFileNames();
	         
	    MultipartFile multipartFile = null;
	    String originalFileName = null;
	    String originalFileExtension = null;
	    String storedFileName = null;
	         
	    String filePath = uploadRoot + "sunday\\";
	         
	    File file = new File(filePath);
        if(file.exists() == false){
            file.mkdirs();
        }
	          
        while(iterator.hasNext()){
            multipartFile = multipartHttpServletRequest.getFile(iterator.next());
            if(multipartFile.isEmpty() == false){
                originalFileName = multipartFile.getOriginalFilename();
                originalFileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
                storedFileName = CommonUtil.getRandomString() + originalFileExtension;
                 
                file = new File(filePath + storedFileName);
                System.err.println(filePath + storedFileName);
                try {
					multipartFile.transferTo(file);
				} 
                catch (IllegalStateException | IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					return "<script type=\"text/javascript\">alert('오류발생');</script>";
				}
            }
        }


	    return "<script type=\"text/javascript\">window.parent.CKEDITOR.tools.callFunction(1, 'http://localhost/up/sunday/" + storedFileName + "', '');\n </script>";
	
	}
}

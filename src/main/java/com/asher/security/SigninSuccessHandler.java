package com.asher.security;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.asher.domain.AjaxVO;
import com.google.gson.Gson;



@Component
public class SigninSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler{

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws ServletException, IOException {
		
		String accept = request.getHeader("accept");
		
		if(true/*StringUtils.indexOf(accept, "json") > -1*/) {
			//response.setContentType("application/json");
			//response.setContentType("utf-8");
		
			response.setContentType("text/plain");
			//Cookie 처리
			//String idSave = request.getParameter("idsave");
			String id = request.getParameter("id");
			
			/*Cookie cookie = new Cookie("id", id);
			cookie.setMaxAge((idSave != null) ? 1000 : 0);
			response.addCookie(cookie);*/
			
			AjaxVO data = new AjaxVO();
			data.setSuccess(true);
			PrintWriter out = response.getWriter();
			out.print(new Gson().toJson(data));
			out.flush();
			out.close();
		}

	}
}
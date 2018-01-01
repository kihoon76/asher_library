<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c"	uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="req" value="${pageContext.request}" />
<c:set var="url">${req.requestURL}</c:set>
<c:set var="uri" value="${req.requestURI}" />
<head>
	<title></title>
	<link rel="stylesheet" href="/resources/jquery-ui/1.12.1/jquery-ui.css" />
	<link rel="stylesheet" href="/resources/os/fullcalendar-3.8.0/fullcalendar.min.css" />
	<link rel="stylesheet" href="/resources/os/fullcalendar-3.8.0/fullcalendar.print.min.css" media="print"/>
	<link rel="stylesheet" href="/resources/os/jquery-modal/css/jquery.modal.css" />
	<link rel="stylesheet" href="/resources/css/schedule.css" />

</head>
<body>
	<div id="dvCalendar"></div>
	<content tag="script">
	<script type="text/javascript" src="/resources/os/fullcalendar-3.8.0/lib/moment.min.js"></script>
	<script type="text/javascript" src="/resources/os/jquery.min.js"></script>
	<script type="text/javascript" src="/resources/jquery-ui/1.12.1/jquery-ui.min.js"></script>
	<script type="text/javascript" src="/resources/os/jquery-modal/js/jquery.modal.min.js"></script>
	<script type="text/javascript" src="/resources/os/fullcalendar-3.8.0/fullcalendar.min.js"></script>
	<script type="text/javascript" src="/resources/os/fullcalendar-3.8.0/locale/ko.js"></script>
	<script type="text/javascript" src="/resources/js/schedule.js"></script>
	</content>
</body>
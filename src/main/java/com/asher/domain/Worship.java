package com.asher.domain;

import java.util.List;

import org.apache.ibatis.type.Alias;

@Alias("Worship")
public class Worship {

	private String title;
	private int startBook;
	private int startChapter;
	private int startParagraph;
	private int endBook;
	private int endChapter;
	private int endParagraph;
	private int startParagraphNum;
	private int endParagraphNum;
	
	private String seolgyoja;
	private String content;
	private List<FileBucket> attachedFiles;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getStartBook() {
		return startBook;
	}
	public void setStartBook(int startBook) {
		this.startBook = startBook;
	}
	public int getStartChapter() {
		return startChapter;
	}
	public void setStartChapter(int startChapter) {
		this.startChapter = startChapter;
	}
	public int getStartParagraph() {
		return startParagraph;
	}
	public void setStartParagraph(int startParagraph) {
		this.startParagraph = startParagraph;
	}
	public int getEndBook() {
		return endBook;
	}
	public void setEndBook(int endBook) {
		this.endBook = endBook;
	}
	public int getEndChapter() {
		return endChapter;
	}
	public void setEndChapter(int endChapter) {
		this.endChapter = endChapter;
	}
	public int getEndParagraph() {
		return endParagraph;
	}
	public void setEndParagraph(int endParagraph) {
		this.endParagraph = endParagraph;
	}
	public int getStartParagraphNum() {
		return startParagraphNum;
	}
	public void setStartParagraphNum(int startParagraphNum) {
		this.startParagraphNum = startParagraphNum;
	}
	public int getEndParagraphNum() {
		return endParagraphNum;
	}
	public void setEndParagraphNum(int endParagraphNum) {
		this.endParagraphNum = endParagraphNum;
	}
	public String getSeolgyoja() {
		return seolgyoja;
	}
	public void setSeolgyoja(String seolgyoja) {
		this.seolgyoja = seolgyoja;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public List<FileBucket> getAttachedFiles() {
		return attachedFiles;
	}
	public void setAttachedFiles(List<FileBucket> attachedFiles) {
		this.attachedFiles = attachedFiles;
	}
}

package com.asher.domain;

import org.apache.ibatis.type.Alias;

@Alias("ParagraphPerChaper")
public class ParagraphPerChapter {

	private int bibleNum;
	private int chapter;
	private int totalParagraph;
	
	public int getBibleNum() {
		return bibleNum;
	}
	public void setBibleNum(int bibleNum) {
		this.bibleNum = bibleNum;
	}
	public int getTotalParagraph() {
		return totalParagraph;
	}
	public void setTotalParagraph(int totalParagraph) {
		this.totalParagraph = totalParagraph;
	}
	public int getChapter() {
		return chapter;
	}
	public void setChapter(int chapter) {
		this.chapter = chapter;
	}
}

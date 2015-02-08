#trickywomen.at
##Relaunch start: 06.02.2015

Development base: onlinebestellung.local (/htdocs/drupalmaster2014-onlinebestellung)
Development environment: trickywomen.local (/htdocs/drupalmaster2014-trickywomen)

###Fonts

1. UBUNTU MEDIUM 18PT
2. OSWALD BOLD 44PT
3. UBUNTU LIGHT 18PT / LINE-HEIGHT 24
4. OSWALD BOLD 30PT
5. UBUNTU BOLD 24PT
6. UBUNTU LIGHT 24PT

###Font-variables

$link = Ubuntu Medium 18pt
$base = Ubuntu Light 18pt
$header1 = Oswald Bold 44pt
$header2 = Oswald Bold 30pt
$header3 = Ubuntu Bold 24pt
$header4 = Ubuntu Light 24pt

###Taxonomy

- Festival year
- Program

###Content Types

- Festival landing page
- Program
- 


##Frontpage

- Create a page-view
- Publish on frontpage checkbox
- Sort page-view with draggable views

##Landing page "Festival"

- [Link to screen](http://www.ulla.at/download/tricky/TW_web2.jpg)
- Create content type "Festival landing page"
- Taxonomy term: "Festival year"
- Links with Linkit module
- Create page-view for Festival landing page
- Sort page-view with draggable views


##Landing page "Programm"

- [Link to screen](http://www.ulla.at/download/tricky/TW_web3.jpg)
- Create content type "Programm"
- Taxonomy term: "Festival year"
- Taxonomy term: "Program" (Wettbewerb 1, Wettbewerb 2, etc)
- Fields:
	* Taxonomy term: "Program"
	* Date (Block)
	* Title
	* Artist
	* Country
	* Year
	* Length
	* Image (multiple)
	* Text
	* Jury's Statement (see: page [Gewinnerinnen](http://www.trickywomen.at/festival/winners/?L=1////////////////////////////////))
	* Vimeo video
	
- Create page-view for "Program Taxonomy" and "Festival Year"



##Section "Festival"

###Gewinnerinnen
- Required fields:
	* Title
	* Text area
	* Entity reference
	* Text area

###Gewinnerinnen Gallery
* Content Type: Gallery
* Fields:
	- Title
	- Text
	- Multiple Image upload
* Use pager for the image field. [Link to tutorial](http://dannyenglander.com/blog/creating-ajax-node-field-pager-embedded-contextual-view)

###Festival Infos
einfache Seite; ideale Lösung wäre mit 

###Programm
siehe oben

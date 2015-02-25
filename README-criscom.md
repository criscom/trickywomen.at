#trickywomen.at
##Relaunch start: 06.02.2015

Development base: onlinebestellung.local (/htdocs/drupalmaster2014-onlinebestellung)
Development environment: trickywomen.local (/htdocs/drupalmaster2014-trickywomen)

###Additional modules

1. [Image Field Caption module](https://www.drupal.org/project/image_field_caption)
2. [LinkIt module](https://www.drupal.org/project/linkit)
3. [Video Embed Field](https://www.drupal.org/project/video_embed_field)

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

###Breakpoints

xlarge: (min-width:1200px)
large: (min-width:980px)
desktop: (min-width:769px)
tablet: (min-width:569px)
mobile: (min-width:0px)


###Taxonomy

- Festival year


###Procedure for films and competitions (not used at the moment)

1. Create Film content for all films
2. Create "[Programm teaser](http://www.ulla.at/download/tricky/TW_web3.jpg)" content like "Wettbewerb 1, Wettbewerb 2, Wettbewerb 3, Animated Documentaries etc" and pull in **Films** through the reference field. Order to your liking.

###Alternative (in use)
1. Create "[Programm teaser](http://www.ulla.at/download/tricky/TW_web3.jpg)" content like "Wettbewerb 1, Wettbewerb 2, Wettbewerb 3, Animated Documentaries etc"
2. Then create Film content and reference film with _Program teaser_.
3. Create a view block to pull in the films on the [_Programm_teaser detail page_](http://www.ulla.at/download/tricky/TW_web4.jpg)

##Content Types

1. Einfache Seite
	* Frontpage
	* Festival Infos
	* Impressum
	* Ausstellung female
	* festival info
	* preise
	* geschichte
	
2. Festival Teaser
3. Program Teaser


### 1. Content type "Einfache Seite" (done)
- Fields:
	* Title (Website)
	* Title (Admin)
	* Subtitle
	* Image (multiple) ==> use with [Image Field Caption module](https://www.drupal.org/project/image_field_caption); will be displayed in the left column
	* Body ==> use with [LinkIt module](https://www.drupal.org/project/linkit)
	* Video embed ==> use with [Video Embed Field](https://www.drupal.org/project/video_embed_field)
	* Image large: 1160px x 650px ==> for image below text area like on 2nd article on frontpage
	* Text area ==> longer description for video
	* Datei laden (file upload) (multiple)

- Dimensions for **image--large**; 1x, 1,5x, 2x
	- xlarge: 1160x650; 1740x975; 2320x1300
	- large: 1160x650; 1740x975; 2320x1300
	- desktop: 980x549; 1470x823; 1960x1098
	- tablet: 768x430; 1152x645; 1536x860
	- mobile: 568x328; 852x492; 1136x656


### 2. Content type "Festival Teaser" (done)
- Used for View: **[Festival landing page](#anchor1)**
- **Fields:**
	- Festival Jahr: Taxonomy term reference (in order to create Festival landing pages per year)
	* Title (Website)
	- Titel (Admin)
	- Image: Teaser image for Festival landing page (displayed nowhere else)
	- Body: Use LinkIt field to create respective links with appropriate titles

### 3. Content type "Program Teaser" (done)
- Used for View: **[Program landing page](#anchor2)**
- **Fields:**
	* Title(Admin)
	* Title(Website): eg. Wettbewerb2
	* Taxonomy term: "Festival year"
	* Image
	* Date
	* Text
	* ~~Entity reference => Content type "Filme";~~ not in use; **the films are referenced through the film content type.**
	
Each teaser on the [Program landing page](http://www.ulla.at/download/tricky/TW_web3.jpg) (Wetbewerb 1, Wettbewerb 2, Österreich Panorama, Poesie, Psyche) is created with the CT "Program Teaser". On the overview page only Title and image are displayed. Title and image are linked to the [_landing page_](http://www.ulla.at/download/tricky/TW_web4.jpg) of the respective competition where the teasers of CT "Filme" are displayed. "Filme" content is pulled into the "Program Teaser" by an entity reference.

## 4. Content type "Film" (done)
- alle Filme, auch Langfilme und Best Practice

- **Create content type "Filme Wettbewerb"**
- Taxonomy term: "Festival year"
- Entity reference: "Program Teaser" (Wettbewerb 1, Wettbewerb 2, etc) - title and date are displayed on the film detail page
- **Fields:**
	* Title(Website)
	* Title(Admin)
	* ~~Taxonomy term: "Program"~~ ==> not needed; we pull in the program teaser through a node reference field in the **Program teaser** content type.
	* Taxonomy term: "Festival year"
	* _**Alternative** (**in use**):_ _Entity Reference: **Program teaser** in order to connect each film with the competition/program it runs in_. ==> needs [Translated entity reference module](http://ftp.drupal.org/files/projects/translated_entityreference-7.x-1.x-dev.zip) for better UX.
	* Date (Block)
	* Title
	* Artist (Text)
	* Country
	* Year
	* Length
	* Image (multiple)
	* Text
	* Title (leave empty when needed) => for Langfilme and Best practice
	* Text (leave empty when needed) => for Langfilme and Best practice
	* Jury's Statement (see: page [Gewinnerinnen](http://www.trickywomen.at/festival/winners/?L=1////////////////////////////////))
	* Vimeo video


## 5. Content type "Artist" (done)
- **Create content type "Artist"
- Taxonomy term: "Festival year"
- You can connect the artist with a film (optional)
- **Fields:**	
	* Title(Website)
	* Title(Admin)
	* Taxonomy term: "Festival year" with inline label "Artist in Residence"
	* Text area with label "Biografie"
	* Text area with label "Filmografie"
	* Text area without label
	* Image (multiple) with caption for the left sidebar
	* Film referenzieren

## 6. Content type "Partnerinnen (logos)" done

- Always set "Sprache" to "Sprachneutral" as we do not translate logos
- Choose the type of
- Logos are ordered according to "Art of Partnerin": views blocks
- Logos within their blocks are ordere by publishing date (ascending): first logo added will be displayed on top
- A normal page "1spaltiges Layout - Einfache Seite" for "PartnerInnen", which is translated into English, is created and the blocks are pulled into the page via the blocks area.

## 7. Content type "Presse" (done)

- Create a page for "Presse" for each year
- Load "Pressekontakt", "Pressetext", "Pressemappe" and Teaser MP4 to display at the top of the "Presse" page
- For "Bildmaterial" for the films we will use a different content type "Bildmaterial" and pull "Bildmaterial" in through block views.

## 8. Content type "Bildmaterial"

- For the press section of each year
- Sort by Taxonomy "Festival year" and Taxonomy "Wettbewerbe"
- Don not translate, show on every language
- Create a field collection
- Create a page for each "Wettbewerb"
- Translate page into English but do not remove German text (we'll hide the German text on the English site with CSS)
- Load all images for one "Wettbewerb" in one page using field collection
- Load web optimized image
- Provide high definition image as a direct download
- Credit area as a text field, one for each language
- Create only one view and sort by taxonomy terms
- Create a new [block view for each year "Bildmaterial 2015"](http://trickywomen.einstern.at/de/admin/structure/views/view/bildmaterial)



##Content Type Gewinnerinnen
- **Create content type "Gewinnerinnen"**
- Required fields:
	* Title(Admin)
	* Title(Website)
	* Teaser image
	* Text area
	* Text area (Award 1)
	* Entity reference => reference to Content Type "Film"
	* Text area (Award 2)
	* Entity reference => reference to Content Type "Film"
	* Text area (Award 3)
	* Entity reference => reference to Content Type "Film"
	* Text area (Award 4)
	* Entity reference => reference to Content Type "Film"
	* Text area (Award 5)	
	* Entity reference => reference to Content Type "Film"
	

##Content Type Gallery (Eröffnung, Impressionen, Preisverleihung) (done)
* **Content Type: Gallery**
* **Fields:**
	- Title (Admin)
	- Title (Website)
	- Subtitle
	- Text
	- Multiple Image upload
* Use pager for the image field. [Link to tutorial](http://dannyenglander.com/blog/creating-ajax-node-field-pager-embedded-contextual-view)

~~Content Type: Best Practice~~  

~~Same design as **Artists in Residence**~~
~~Create page with "Best practice"~~
~~With node reference pull in Content created with "Basic page": Image | Title, Text~~
~~**Content Type: Best practice**~~
~~Fields:~~
	~~Title (Admin)~~
	~~Title (Website)~~
	~~Subtitle~~
	~~Text~~
	~~Entity reference "Basic page"	~~

##Views

###Frontpage

- Create a page-view
- Publish on frontpage checkbox
- Sort page-view with draggable views

###[View Festival landing page](id:anchor1)
- [Link to screen](http://www.ulla.at/download/tricky/TW_web2.jpg)
- **View: Festival landing page**  
- Create view for content type **Festival teaser**
- draggable views
- Taxonomy term: "Festival year"
- Links with Linkit module
- Create page-view for Festival landing page
- Sort page-view with draggable views

For each teaser on the Festival landing page, create a node with the "Festival landing page" content type. From there link to the respective pages.

###[View Program landing page](id:anchor2)
- [Link to screen](http://www.ulla.at/download/tricky/TW_web3.jpg)
- **View: Program landing page**
- **Content Type: Program Teaser**
- Create view for content type Program teaser
- Create page-view for "Festival Year"
- draggable views

##Individuel pages

###Page Festival Infos
- **Content Type: Basic page**
- Title, Teaser and link to Festival Infos detail page (Basic page)

###Page Film detail
- **Content Type: Film**

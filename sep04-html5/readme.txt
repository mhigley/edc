Earliest websites written to support Netscape Navigator and Internet Explorer
-Quirks Mode (pre web standards)
-Almost Standards Mode (small number of quirks)
-Full Standards Mode

Original DOCTYPE declarations specified the markup the document is written in. The DOCTYPEs aren't actually important. HTML5 supports existing content. If content contains and element from HTML 3.2, it will support it. Features, no DOCTYPEs.
	e.g.:
	1. Any case-insensitive match for the string "<!DOCTYPE".
	2. One or more space characters.
	3. Any case-insensitive match for the string "HTML".
	4. Optionally, one or more space characters.
	5. A ">" character.

Elements that are never allowed contents are called void elements. Void elements are: area, base, br, col, command, embed, hr, img, input, keygen, link, meta, param, source, track and wbr.

All other tags (non-void tags) have start tags to indicate where they begin and end tags indicating where they end.
	e.g.:
	**Start tags**
	1. A "<" character.
	2. The element’s tag name.
	3. Optionally, one or more attributes, each of which must be preceded by one or more space characters.
	4. Optionally, one or more space characters.
	5. Optionally, a "/" character, which may be present only if the element is a void element.
	6. A ">" character.
	**End tags**
	1. A "<" character.
	2. A "/" character
	3. The element’s tag name.
	4. Optionally, one or more space characters.
	5. A ">" character.

Misnested tags are tags that are not containes within the same contents as its start tag.
	e.g.:
	`<b>foo <i>bar</b> baz</i>` (the </i> is a misnested tag)

Character encoding in pre HTML5 written as:
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> now written as <meta charset="UTF-8">

The Script tag has done away with the type attribute.
<script type="text/javascript" src="file.js"></script> is now written as <script src="file.js"></script>

Similarly, the type attribute isn't needed in a CSS link.
<link rel="stylesheet" type="text/css" href="file.css"> is now written as <link rel="stylesheet" href="file.css">
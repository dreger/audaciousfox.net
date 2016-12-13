
{{ $url := .Params.link }}
{{ $url := replace $url "https://www." "" }}
{{ $url := replace $url "http://www." "" }}
{{ $url := replace $url "https://" "" }}
{{ $url := replace $url "http://" "" }}
{{ $url := split $url "/" }}


<article>
   {{ if (eq .Section "linked") }}
     <header class="article-header">
     <div class="url">
       <span class="link-rl"> 
          <a href="{{ .Params.link }}" >{{ index $url 0 }}</a>  &rarr;
        </span>
     </div>

       <h2 class="link">
         <span class="link-target"><a href="{{ .RelPermalink }}" >{{ .Title }}</a></span>
       </h2>
     </header>
   {{ else }}
      <header class="article-header">
         <h1><a href="{{ .RelPermalink }}">{{ .Title }}</a></h1>
       </header>

       <p class="faded">{{ .Date.Format "Monday, 2 January 2006" }}</p>
   {{ end }}

   {{ .Content }}
 </article>

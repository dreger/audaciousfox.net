A test readme.

{{ $url := .Params.link }}
{{ $url := replace $url "https://www." "" }}
{{ $url := replace $url "http://www." "" }}
{{ $url := replace $url "https://" "" }}
{{ $url := replace $url "http://" "" }}
{{ $url := split $url "/" }}

Test.
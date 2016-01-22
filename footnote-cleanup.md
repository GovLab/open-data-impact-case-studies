# footnote cleanup
Use the following regex commands in Vim or a plugin like Vintageous to clean up broken links in the footnote section:
```
s:</span></a>([^<]*)</p>:\1</span></a></p>:g

s:<a href="[^<]*"><span class="e-link">(http[s]?.//[^<]*)</span></a></p>:<a href="\1"><span class="e-link">\1</span></a></p>:g
```
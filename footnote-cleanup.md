# footnote cleanup
Use the following regex commands in Vim or a plugin like Vintageous to clean up broken links in the footnote section.  Select the text in the footnote section, hit `:`, and paste in the following commands, in order:
```
s:</span></a>([^<]*)</p>:\1</span></a></p>:g

s:<a href="[^<]*"><span class="e-link">(http[s]?.//[^<]*)</span></a></p>:<a href="\1"><span class="e-link">\1</span></a></p>:g

```

For fixing `.` included in `href` problem:
```

# just .

s:(http[s]?.//[^<]*)\.</span></a></p>:\1</span></a>.</p>:g

s:(http[s]?.//[^<]*)\.("><span class="e-link">):\1\2:g

# . and space

s:(http[s]?.//[^<]*)\. </span></a></p>:\1</span></a>.</p>:g

s:(http[s]?.//[^<]*)\. ("><span class="e-link">):\1\2:g

```

- note, these could possibly be cleaned up. second set may not be necessary if problems from 1st set are resolved with a smarter regex
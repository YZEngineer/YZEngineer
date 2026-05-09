# YouTube Audio Configuration

Bu projede kullanılan ses, YouTube üzerinden oynatılmaktadır.  
Farklı bir ses veya müzik kullanmak için `script.js` dosyasındaki YouTube Video ID değerini değiştirmeniz yeterlidir.

---

## Video ID Değiştirme

`script.js` dosyasını açın ve aşağıdaki kısmı bulun:

```js
videoId: 'NCeOjfT6Yzo',
playlist: 'NCeOjfT6Yzo',
```

Buradaki `NCeOjfT6Yzo` değerini istediğiniz YouTube videosunun ID’si ile değiştirin.

Örnek:

```js
videoId: 'dQw4w9WgXcQ',
playlist: 'dQw4w9WgXcQ',
```

---

## YouTube Video ID Nasıl Bulunur?

Örnek bağlantı:

```txt
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

Bu linkteki video ID:

```txt
dQw4w9WgXcQ
```

kısmıdır.

---

## Not

Loop özelliğinin düzgün çalışması için:

```js
videoId
```

ve

```js
playlist
```

değerlerinin aynı olması gerekir.

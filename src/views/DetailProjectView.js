/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: Promise.resolve("const jsonArray=[{Name:\"4 Seasons Sculpture\",Link:\"4-seasons-sculpture\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"63a1ddf920ac82651ad91c49\",\"Created On\":\"Tue Dec 20 2022 16:08:25 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:17:16 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:18:26 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1ddf2ca63d59be45b8521_IMG_1026.JPG\",\"Thumbnail Secondary\":\"\",\"Big Image\":\"\",Category:\"\",\"Feature?\":\"false\",\"Short Description\":\"\",Location:\"\",Body:\"\",Gallery:\"\",Client:\"\",oneliner:\"\"},{Name:\"Etiler Globe Theatre\",Link:\"etiler-globe-theatre\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"63a1df9836160dccaffe38f5\",\"Created On\":\"Tue Dec 20 2022 16:15:20 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:17:16 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:18:26 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1df412598ed89995164fe_IMG_1023.JPG\",\"Thumbnail Secondary\":\"\",\"Big Image\":\"\",Category:\"\",\"Feature?\":\"false\",\"Short Description\":\"\",Location:\"\",Body:\"\",Gallery:\"\",Client:\"\",oneliner:\"\"},{Name:\"Film Academy\",Link:\"film-academy\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"63a1e0041ef1fc70b8ceac60\",\"Created On\":\"Tue Dec 20 2022 16:17:08 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:17:16 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:18:26 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1dd2f56f8a5e9a231b0a5_IMG_1027.JPG\",\"Thumbnail Secondary\":\"\",\"Big Image\":\"\",Category:\"\",\"Feature?\":\"false\",\"Short Description\":\"\",Location:\"\",Body:\"\",Gallery:\"\",Client:\"\",oneliner:\"\"},{Name:\"Niyama\",Link:\"niyama\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"6377c735e0b2ef7a5744a88c\",\"Created On\":\"Tue Apr 05 2022 05:06:24 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:23:28 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:25:18 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1dd2f56f8a5e9a231b0a5_IMG_1027.JPG\",\"Thumbnail Secondary\":\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/636d00d862d8698ee0b3596f_Niyama%20Ofis%20copy.jpg\",\"Big Image\":\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/636d00e1a1159557db64b6bc_Niyama%20Mutfak%202%20copy.jpg\",Category:\"Interior\",\"Feature?\":\"false\",\"Short Description\":\"Solo Mimarlık olarak mekanın tasarım ve teknik çizim çalışmalarını üstlendik ve projenin uygulamasını yürüttük. Projeyi geliştirirken, farklı çizgilere sahip modern ve klasik tasarım yaklaşımlarının tek bir mekanda harmoni içinde buluştuğunu hayal ettik. Tıpkı doğa gibi kucaklayıcı ve huzur veren mekanlar oluşturmak istedik. Ekibimiz tarafından mekana özel olarak tasarlanan her bir parça bu anlayış doğrultusunda gelişti. Doğadan ilham alan pastel renkler ve organik biçimler, doğal ahşap ve mermer dokular mekanın dilini oluşturdu. \",Location:\"Nişantaşı\",Body:\'<p id=\"\">Solo Mimarlık olarak mekanın tasarım ve teknik çizim çalışmalarını üstlendik ve projenin uygulamasını yürüttük. Projeyi geliştirirken, farklı çizgilere sahip modern ve klasik tasarım yaklaşımlarının tek bir mekanda harmoni içinde buluştuğunu hayal ettik. Tıpkı doğa gibi kucaklayıcı ve huzur veren mekanlar oluşturmak istedik. Ekibimiz tarafından mekana özel olarak tasarlanan her bir parça bu anlayış doğrultusunda gelişti. Doğadan ilham alan pastel renkler ve organik biçimler, doğal ahşap ve mermer dokular mekanın dilini oluşturdu. </p><p id=\"\">CEPHE</p><p id=\"\">Binanın dış cephesinde showroom alanından sokağa bakan vitrinin sergileneceği, doğal mermer bloklar ile çevrelenen cam bir cephe tasarladık. Marka adı ve logosunu cephe üzerine işleyip ışıklandırarak uygulamamızı tamamladık.</p><p id=\"\">GİRİŞ</p><p id=\"\">Misafirleri karşılayan ahşap giriş kapısı için lotus çiçeği ve yapraklarla süslenen özel bir fırınlanmış renkli cam tasarladık. </p><p id=\"\">SHOWROOM</p><p id=\"\">Mekanda doğal ve yuvarlak hatlar oluşturmak istedik. Tasarladığımız özel kalıplarla köşesiz bir duvar uygulaması yaptık. Dairesel çizgilere sahip nişler ile duvar içinde ürün sergileme alanları ve depolama alanları oluşturduk. Mekana özel mermer ve pirinç malzemeyi birlikte kullandığımız sabit ve hareketli askılar tasarladık. Vitrin ve kabin olarak kullanılacak alanı bir platformla yükselterek zeminden ayırdık. Zeminde doğal mermer ve çakıl uygulamasıyla tasarımımızı tamamladık. </p><p id=\"\">KULLANIM ALANLARI</p><p id=\"\">Mekanda doğa etkisini hissettirmek amacıyla; duvarlarda ve mobilyalarda mavi, yeşil ve toprak tonlarında renkler tercih ettik. Zeminde; koridor ve ıslak hacimlerde seramik uygulaması, diğer alanlarda ise mevcut ahşap parkeleri koruyarak sistre uygulaması yaptık. <br>Mutfak alanı için tasarladığımız meşe kaplama mobilyalar ve seçtiğimiz doğal ahşap jaluziler ile tasarımımızı destekledik. Koridor, mutfak ve ofis mekanlarına lambiri duvar kaplamaları uyguladık. Atölye alanları için çalışma masaları ve dolaplar tasarladık. Ortak kullanımlı tuvalet için tasarım ekibimizle birlikte özgün bir duvar resmi çalışması yaptık. Ofis alanında rustik tarzda ahşap bir çalışma masası ile birlikte heykelsi bir mermer ayakla taşınan yuvarlak cam tablalı bir toplantı masası tasarladık. Dairesel hatlara sahip ahşap ayaklı bir dolap ve doğal çizgili tasarım anlayışımızı sürdüren organik biçimli bir koltuk tasarımıyla mekanı tamamladık.</p><p id=\"\">‍</p>\',Gallery:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/636d00e1a1159557db64b6bc_Niyama%20Mutfak%202%20copy.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/636d00ed709c5020856be601_Niyama%20Mutfak%20copy.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/636d00d862d8698ee0b3596f_Niyama%20Ofis%20copy.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/636d00d1a4dc6a827f12f757_Niyama%20Tualet%20copy.jpg\",Client:\"NIYAMA\",oneliner:\"Fashion Design House\"},{Name:\"Simurg Garden\",Link:\"simurg-garden\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"63a1de322598ed30db514b56\",\"Created On\":\"Tue Dec 20 2022 16:09:22 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:17:16 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:18:26 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1de2b6bc4bd0124df3bba_IMG_1021.JPG\",\"Thumbnail Secondary\":\"\",\"Big Image\":\"\",Category:\"\",\"Feature?\":\"false\",\"Short Description\":\"\",Location:\"\",Body:\"\",Gallery:\"\",Client:\"\",oneliner:\"\"},{Name:\"Social Complex\",Link:\"social-complex\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"63a1dfb8903b133815311261\",\"Created On\":\"Tue Dec 20 2022 16:15:52 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:17:16 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:18:26 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1de2b6bc4bd0124df3bba_IMG_1021.JPG\",\"Thumbnail Secondary\":\"\",\"Big Image\":\"\",Category:\"\",\"Feature?\":\"false\",\"Short Description\":\"\",Location:\"\",Body:\"\",Gallery:\"\",Client:\"\",oneliner:\"\"},{Name:\"Sogut Competition\",Link:\"sogut-competition\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"63a1de83b822c02ef5efbfe2\",\"Created On\":\"Tue Dec 20 2022 16:10:43 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:17:16 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:18:26 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1de54af833a3bcdd6d78d_IMG_1020.JPG\",\"Thumbnail Secondary\":\"\",\"Big Image\":\"\",Category:\"\",\"Feature?\":\"false\",\"Short Description\":\"\",Location:\"\",Body:\"\",Gallery:\"\",Client:\"\",oneliner:\"\"},{Name:\"Solo Tiny\",Link:\"solo-tiny\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"6377c735e0b2ef134a44a889\",\"Created On\":\"Tue Apr 05 2022 05:01:43 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:23:28 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:25:18 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1dda64e9b1b8e2f3d7ddf_IMG_1024.JPG\",\"Thumbnail Secondary\":\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d63473b91e1e7271e3ff_TN_1_compressed.JPG\",\"Big Image\":\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d63473b91e1e7271e3ff_TN_1_compressed.JPG\",Category:\"Interior\",\"Feature?\":\"true\",\"Short Description\":\"Aliquip in labore dolore enim et. Ut dolor cupidatat aute fugiat et in nisi. Velit adipiscing aute tempor et sed veniam incididunt. \",Location:\"Varies\",Body:\'<p id=\"\">Aliquip in labore dolore enim et. Ut dolor cupidatat aute fugiat et in nisi. Velit adipiscing aute tempor et sed veniam incididunt. Magna eiusmod minim aliquip consectetur reprehenderit in ad nisi aute. Pariatur ut dolore elit consectetur ullamco id nisi in.</p><p id=\"\">Reprehenderit officia occaecat qui dolor in cillum. Duis in dolore laboris laborum aliquip anim. Consectetur incididunt ut irure laboris sed nostrud labore. Proident labore duis ut cupidatat nulla. Eu occaecat enim in. Ad velit ullamco elit aliquip.</p><p id=\"\">Sint reprehenderit sunt dolore anim ad. Elit culpa irure ut mollit aliquip non id. Cillum dolor exercitation est duis excepteur. Ut dolor non sed dolore sint duis mollit.</p><p id=\"\">Occaecat do ex sed magna consequat adipiscing. Non aute aliquip ut velit commodo labore quis. Sunt nulla in nostrud. Tempor mollit nulla cupidatat non et. Magna pariatur aute laborum labore cupidatat dolore incididunt.</p><p id=\"\">In ad ut id cupidatat dolor magna. Sunt aute dolore occaecat non est quis ex nisi. Sed in elit consectetur. In ullamco proident culpa nulla consequat aliquip anim duis quis. Velit ea ullamco anim magna.</p><p id=\"\">‍</p>\',Gallery:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d63473b91e1e7271e3ff_TN_1_compressed.JPG; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d8b0b1250253f603dd16_KTLG_03_INGREDIENTS%20copy.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d8b1e663616cb614b161_KTLG_TIP1_S1%20copy.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d8b1c6b1ef89dc39c6c7_KTLG_TIP1_S2%20copy.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d8b3c6b1ef95fd39c6c9_KTLG_TIP2_S1%20copy.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d8b3e663617e9114b162_KTLG_TIP2_S2%20copy.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d8b28ae82dea2e4991fc_KTLG_TIP3_S1%20copy.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d8b2e52e4400ba914c6d_KTLG_TIP3_S2%20copy.jpg\",Client:\"\",oneliner:\"Fashion Design House\"},{Name:\"Solo Tiny - Ligne\",Link:\"solo-tiny-ligne\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"63a1df4533a86fdafbf1dd6d\",\"Created On\":\"Tue Dec 20 2022 16:13:57 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:17:16 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:18:26 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1df412598ed89995164fe_IMG_1023.JPG\",\"Thumbnail Secondary\":\"\",\"Big Image\":\"\",Category:\"\",\"Feature?\":\"false\",\"Short Description\":\"\",Location:\"\",Body:\"\",Gallery:\"\",Client:\"\",oneliner:\"\"},{Name:\"Solo Tiny - Venti\",Link:\"solo-tiny-venti\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"63a1dee320ac82639fd925f2\",\"Created On\":\"Tue Dec 20 2022 16:12:19 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:17:16 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:18:26 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1ded6b822c03965efc9ff_IMG_1022.JPG\",\"Thumbnail Secondary\":\"\",\"Big Image\":\"\",Category:\"\",\"Feature?\":\"false\",\"Short Description\":\"\",Location:\"\",Body:\"\",Gallery:\"\",Client:\"\",oneliner:\"\"},{Name:\"Solo Tiny - Yokko\",Link:\"solo-tiny-yokko\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"63a1df614ee5091b1ea19aa5\",\"Created On\":\"Tue Dec 20 2022 16:14:25 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:17:16 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:18:26 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1dda64e9b1b8e2f3d7ddf_IMG_1024.JPG\",\"Thumbnail Secondary\":\"\",\"Big Image\":\"\",Category:\"\",\"Feature?\":\"false\",\"Short Description\":\"\",Location:\"\",Body:\"\",Gallery:\"\",Client:\"\",oneliner:\"\"},{Name:\"Takı Atölyesi\",Link:\"taki-atolyesi\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"6377c735e0b2ef69b644a878\",\"Created On\":\"Tue Apr 05 2022 05:02:40 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:51:02 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:51:12 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1ded6b822c03965efc9ff_IMG_1022.JPG\",\"Thumbnail Secondary\":\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d4d9e6636124eb146d58_ASDGFHLKJ.jpg\",\"Big Image\":\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d4dcfb4a8c3ba78cbdbe_ASFDGHKJHF.jpg\",Category:\"Interior\",\"Feature?\":\"false\",\"Short Description\":\"They\'re said kind grass fish seas it midst saw thing evening she\'d replenish they\'re earth moveth very.\",Location:\"Çanakkale, Adatepe Köy Evleri\",Body:\'<p id=\"\">Aliquip in labore dolore enim et. Ut dolor cupidatat aute fugiat et in nisi. Velit adipiscing aute tempor et sed veniam incididunt. Magna eiusmod minim aliquip consectetur reprehenderit in ad nisi aute. Pariatur ut dolore elit consectetur ullamco id nisi in.</p><p id=\"\">Reprehenderit officia occaecat qui dolor in cillum. Duis in dolore laboris laborum aliquip anim. Consectetur incididunt ut irure laboris sed nostrud labore. Proident labore duis ut cupidatat nulla. Eu occaecat enim in. Ad velit ullamco elit aliquip.</p><p id=\"\">Sint reprehenderit sunt dolore anim ad. Elit culpa irure ut mollit aliquip non id. Cillum dolor exercitation est duis excepteur. Ut dolor non sed dolore sint duis mollit.</p><p id=\"\">Occaecat do ex sed magna consequat adipiscing. Non aute aliquip ut velit commodo labore quis. Sunt nulla in nostrud. Tempor mollit nulla cupidatat non et. Magna pariatur aute laborum labore cupidatat dolore incididunt.</p><p id=\"\">In ad ut id cupidatat dolor magna. Sunt aute dolore occaecat non est quis ex nisi. Sed in elit consectetur. In ullamco proident culpa nulla consequat aliquip anim duis quis. Velit ea ullamco anim magna.</p><p id=\"\">‍</p>\',Gallery:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d4d5fb4a8cc3fb8cbcc1_ADGFHJ.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d4d9e6636124eb146d58_ASDGFHLKJ.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d4dcfb4a8c3ba78cbdbe_ASFDGHKJHF.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d5013a69e96042c883e0_I%CC%87C%CC%A7.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d504fb4a8c284b8cc071_SGDFHJ.jpg; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381d507e6636121f3146fe8_WERTY.jpg\",Client:\"\",oneliner:\"Fashion Design House\"},{Name:\"Yalova\",Link:\"yalova\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"6377c735e0b2ef952644a865\",\"Created On\":\"Sat Apr 02 2022 03:59:17 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:17:16 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:18:26 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1ddaf3619da7eb57a1b6d_IMG_1025.JPG\",\"Thumbnail Secondary\":\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63667a87befaed7e99e3477d_project-06.jpg\",\"Big Image\":\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381defc38bb0d69e7ce458d_Screenshot%202022-11-26%20at%2012.39.55.png\",Category:\"Architecture\",\"Feature?\":\"true\",\"Short Description\":\"Aliquip in labore dolore enim et. Ut dolor cupidatat aute fugiat et in nisi. Velit adipiscing aute tempor et sed veniam incididunt. Magna eiusmod minim aliquip consectetur reprehenderit in ad nisi aute. Pariatur ut dolore elit consectetur ullamco id nisi in.\",Location:\"Turkey\",Body:\'<p id=\"\">Aliquip in labore dolore enim et. Ut dolor cupidatat aute fugiat et in nisi. Velit adipiscing aute tempor et sed veniam incididunt. Magna eiusmod minim aliquip consectetur reprehenderit in ad nisi aute. Pariatur ut dolore elit consectetur ullamco id nisi in.</p><p id=\"\">Reprehenderit officia occaecat qui dolor in cillum. Duis in dolore laboris laborum aliquip anim. Consectetur incididunt ut irure laboris sed nostrud labore. Proident labore duis ut cupidatat nulla. Eu occaecat enim in. Ad velit ullamco elit aliquip.</p><p id=\"\">Sint reprehenderit sunt dolore anim ad. Elit culpa irure ut mollit aliquip non id. Cillum dolor exercitation est duis excepteur. Ut dolor non sed dolore sint duis mollit.</p><p id=\"\">Occaecat do ex sed magna consequat adipiscing. Non aute aliquip ut velit commodo labore quis. Sunt nulla in nostrud. Tempor mollit nulla cupidatat non et. Magna pariatur aute laborum labore cupidatat dolore incididunt.</p><p id=\"\">In ad ut id cupidatat dolor magna. Sunt aute dolore occaecat non est quis ex nisi. Sed in elit consectetur. In ullamco proident culpa nulla consequat aliquip anim duis quis. Velit ea ullamco anim magna.</p><p id=\"\">‍</p>\',Gallery:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381de24b125022910041f12_Kuranglez%20copy-0000.png; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381de2338bb0d0ad7ce345f_Kuranglez%20copy-0001.png; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381de23e52e44036891a4e6_Kuranglez%20copy-0002.png; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381de23c6b1ef23ba39fc21_Kuranglez%20copy-0003.png; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381de2cf875b12db5570ef3_Yalova%20Heykel%20copy-0000.png; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381dec30b97f61c90baff21_Yalova%20Heykel%20copy-0002.png; https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/6381de2cf875b12db5570ef3_Yalova%20Heykel%20copy-0000.png\",Client:\"\",oneliner:\"Fashion Design House\"},{Name:\"Yalova Kuranglez\",Link:\"yalova-kuranglez\",\"Collection ID\":\"6377c735e0b2ef4ad944a7c8\",\"Item ID\":\"63a1dfe015c30e4a5829420a\",\"Created On\":\"Tue Dec 20 2022 16:16:32 GMT+0000 (Coordinated Universal Time)\",\"Updated On\":\"Tue Dec 20 2022 16:17:16 GMT+0000 (Coordinated Universal Time)\",\"Published On\":\"Tue Dec 20 2022 16:18:26 GMT+0000 (Coordinated Universal Time)\",Thumbnail:\"https://uploads-ssl.webflow.com/63667a87befaed2d1ce34774/63a1de54af833a3bcdd6d78d_IMG_1020.JPG\",\"Thumbnail Secondary\":\"\",\"Big Image\":\"\",Category:\"\",\"Feature?\":\"false\",\"Short Description\":\"\",Location:\"\",Body:\"\",Gallery:\"\",Client:\"\",oneliner:\"\"}];function getProjectData(){const a=window.location.pathname.split(\"/\").pop();return jsonArray.find(e=>e.Link===a)}const projectData=getProjectData();document.getElementById(\"project-data\").innerHTML=\`
      <div class=\"project-detail-section wf-section\">
        <div class=\"container w-container\"><img src=\"https://uploads-ssl.webflow.com/624411a161dbba153b79c135/624678020e8561375b406014_pinterest.svg\" loading=\"eager\" alt=\"\" class=\"image-3\">
          <div class=\"w-layout-grid grid-project-info\">
            <div id=\"w-node-_9007da63-f615-5910-edd0-685ad7ef3ee9-1c44a815\" class=\"div-block-2\">
              <h1 class=\"heading-2\"></h1>
            </div>
            <div id=\"w-node-c39ad925-1d74-34c9-eedd-20b3523cc33b-1c44a815\" class=\"project-info-right\">
              <div class=\"featured-list\">
                <div class=\"featured-list-item\">
                  <div class=\"featured-list-title\">Client: </div>
                  <div>${projectData.Client}</div>
                </div>
                <div class=\"featured-list-item\">
                  <div class=\"featured-list-title\">Location: </div>
                  <div>${projectData.Location}</div>
                </div>
              </div>
            </div>
          </div>
          <div class=\"w-richtext\"></div>
        </div>
      </div>
      \`,window.onload=function(){getProjectData()};"), isAsync: false },
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63667a86befaedf883e34757").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class DetailProjectView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/DetailProjectController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = DetailProjectView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6377c735e0b2eff41c44a815'
    htmlEl.dataset['wfSite'] = '63667a86befaedf883e34757'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = DetailProjectView.Controller !== DetailProjectView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\solo-architects.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-w-id="a1e4a4fe-8958-4d97-d653-0e5ab1a1f9e9" data-animation="default" data-collapse="medium" data-duration={60} data-easing="linear" data-easing2="linear" role="banner" className="af-class-navbar w-nav">
              <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                <a href="index.html" className="af-class-nav-link w-nav-link">Home</a>
                <a href="about.html" className="af-class-nav-link w-nav-link">About</a>
                <a href="projects.html" className="af-class-nav-link w-nav-link">Work</a>
                <a href="service-detail.html" className="af-class-nav-link w-nav-link">Services</a>
                <a href="contact.html" className="af-class-nav-link w-nav-link">Contact</a>
              </nav>
              <div className="af-class-nav-button w-nav-button">
                <div className="af-class-icon w-icon-nav-menu" />
              </div>
              <div className="af-class-div-block">
                <a href="index.html" className="af-class-brand w-nav-brand"><img src="images/logo_1.svg" loading="lazy" data-w-id="a1e4a4fe-8958-4d97-d653-0e5ab1a1f9eb" alt className="af-class-image" />
                  <div className="af-class-text-block">Solo</div>
                  <div className="af-class-text-block-2">Architects</div>
                </a>
              </div>
            </div>
            <div id="project-data" />
            <footer id="footer" className="af-class-footer af-class-wf-section">
              <div className="af-class-container w-container">
                <div className="w-layout-grid af-class-grid-footer">
                  <div id="w-node-_006893bb-e490-891c-7130-f6fdd71ac77c-d71ac766" className="af-class-footer-item">
                    <div className="af-class-footer-call-wrap">
                      <div className="af-class-footer-call">
                        <div className="af-class-footer-mail">info@architecturesolo.com</div>
                        <a href="mailto:info@architecturesolo.com" className="af-class-link-2">info@architecturesolo.com</a>
                        <a href="tel:+905074446462" className="af-class-link-2">+90 (507) 444 6462</a>
                        <div className="af-class-footer-number">+90 (507) 444 64 62</div>
                      </div>
                      <a data-w-id="006893bb-e490-891c-7130-f6fdd71ac787" href="contact.html" className="af-class-button-link w-inline-block">
                        <div className="af-class-button-link-line-hover" />
                        <div className="af-class-button-link-line" />
                        <div>Send A message</div>
                      </a>
                    </div>
                    <div className="af-class-footer-social">
                      <a href="https://www.instagram.com/soloarchitects/" target="_blank" className="af-class-footer-social-link w-inline-block"><img src="images/instagram-brands.svg" loading="lazy" alt className="af-class-footer-social-icon" /></a>
                      <a href="https://pinterest.com/soloarchitects" target="_blank" className="af-class-footer-social-link w-inline-block"><img src="images/pinterest.svg" loading="lazy" alt className="af-class-footer-social-icon" /></a>
                      <a href="https://twitter.com/soloarchitects/" target="_blank" className="af-class-footer-social-link w-inline-block"><img src="images/twitter.svg" loading="lazy" alt className="af-class-footer-social-icon" /></a>
                    </div>
                    <ul role="list" className="af-class-footer-menu w-list-unstyled">
                      <li className="af-class-footer-help-link-item">
                        <a href="utility-pages/style-guide.html" className="af-class-footer-link">Style Guide</a>
                      </li>
                      <li className="af-class-footer-help-link-item">
                        <a href="utility-pages/untitled.html" className="af-class-footer-link">Instructions</a>
                      </li>
                      <li className="af-class-footer-help-link-item">
                        <a href="utility-pages/licenses.html" className="af-class-footer-link">Licenses</a>
                      </li>
                      <li className="af-class-footer-help-link-item">
                        <a href="utility-pages/changelog.html" className="af-class-footer-link">Changelog</a>
                      </li>
                    </ul>
                    <h4 className="af-class-heading-5">Have a question, a project? <br />We'd love to discuss</h4>
                  </div>
                  <div id="w-node-_006893bb-e490-891c-7130-f6fdd71ac769-d71ac766" className="af-class-footer-item">
                    <div className="w-layout-grid af-class-grid-menu-item">
                      <ul role="list" className="w-list-unstyled">
                        <li className="af-class-footer-link-item">
                          <a href="index.html" className="af-class-footer-link">Home</a>
                        </li>
                        <li className="af-class-footer-link-item">
                          <a href="about.html" className="af-class-footer-link">About Us</a>
                        </li>
                        <li className="af-class-footer-link-item">
                          <a href="projects.html" className="af-class-footer-link">Projects</a>
                        </li>
                        <li className="af-class-footer-link-item">
                          <a href="contact.html" className="af-class-footer-link">Contact</a>
                        </li>
                      </ul>
                    </div>
                    <div className="af-class-footer-bottom">
                      <div className="af-class-footer-logo">
                        <a href="index.html" className="w-inline-block"><img src="images/logo_1.svg" loading="lazy" width={100} height="Auto" alt className="af-class-image-2" /></a>
                        <a href="https://goo.gl/maps/8RbYQLJX7fT2jNft9" className="af-class-link-3">Cihangir Mahallesi Pürtelaş, <br />Sokak No:3A Beyoğlu/ İstanbul</a>
                        <p className="af-class-footer-address">Cihangir Mahallesi Pürtelaş, <br />Sokak No:3A Beyoğlu/ İstanbul<br /></p>
                      </div>
                      <p className="af-class-copyright">© 2022 Solo Architects<br />Powered by <a href="https://www.gnu.org/gnu/gnu.html" target="_blank">GNU/Linux</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default DetailProjectView

/* eslint-enable */
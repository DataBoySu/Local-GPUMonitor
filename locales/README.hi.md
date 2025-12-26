# MyGPU: एक हल्का GPU प्रबंधन उपकरण: एक संक्षिप्त `nvidia-smi` वैकल्पिक साथ एक सुंदर वेब डैशबोर्ड

<div style="text-align:center; margin:18px 0;">
  <img src="../monitor/api/static/logo.png" alt="MyGPU लोगो"/>
</div>

## परिचय

*MyGPU एक हल्का GPU प्रबंधन उपकरण है जो एक संक्षिप्त `nvidia-smi` वैकल्पिक के साथ एक सुंदर वेब डैशबोर्ड प्रदान करता है।*

![लाइसेंस](https://img.shields.io/badge/लाइसेंस-MIT-blue.svg)
![पायथन](https://img.shields.io/badge/पायथन-3.10%2B-blue)
![संस्करण](https://img.shields.io/badge/संस्करण-1.2.3-blue)
![प्लेटफ़ॉर्म](https://img.shields.io/badge/प्लेटफ़ॉर्म-Windows-lightgrey)
![cuda 12.x](https://img.shields.io/badge/CUDA-12.x-0f9d58?logo=nvidia)

## गैलरी

### वेब डैशबोर्ड

<details>
  <summary>वेब डैशबोर्ड</summary>
  <div style="display:flex; overflow-x:auto; gap:10px; padding:12px 0; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch;">
    <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/web1.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>
    <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/web2.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>
    <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/web3.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>
    <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/web4.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>
  </div>
</details>

<details>
  <summary>CLI</summary>
  <div style="display:flex; overflow-x:auto; gap:10px; padding:12px 0; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch;">
    <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/cli1.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>
    <!-- अन्य CLI छवियाँ यहाँ जोड़ें -->
  </div>
</details>

### क्यों इसे इस्तेमाल करें?

- **हल्का**: न्यूनतम संसाधन पैरामीटर।
- **लचीला**: CLI उपकरण के रूप में या पूर्ण वेब डैशबोर्ड के रूप में चलाएँ।
- **प्रशासक-केंद्रित**: VRAM प्रतिबंध (सीमाओं का पालन करने वाली प्रक्रियाओं को स्वचालित रूप से समाप्त करना) और देखने वाली सूचियाँ शामिल हैं।
- **विकासकर्ता के अनुकूल**: जेएमएम (जेनेरिक मैट्रिक्स मल्टीप्लिकेशन) और कण भौतिकी जैसे मानकों के लिए बनाई गई परीक्षण और तनाव परीक्षण उपकरण।

---

### विशेषताएँ

- **वास्तविक समय की निगरानी**:
  - विस्तृत GPU मीट्रिक्स (उपयोग, VRAM, शक्ति, तापमान)।
  - सिस्टम मीट्रिक्स (CPU, RAM, आदि)।

- **प्रशासक और प्रवर्तन**:
  - **VRAM सीमाएँ**: प्रत्येक GPU के लिए VRAM उपयोग पर कठोर सीमाएँ सेट करें।
  - **स्वचालित समाप्ति**: प्रशासक के लिए VRAM नीतियों का उल्लंघन करने वाली प्रक्रियाओं को स्वचालित रूप से समाप्त करें।
  - **देखने वाली सूचियाँ**: विशिष्ट PIDs या प्रक्रिया नामों की निगरानी करें।

- **मानकीकरण और तनाव परीक्षण**:
  - **तनाव परीक्षण**: जेएमएम लोड के साथ कॉन्फ़िगरेबल जेनेरिक मैट्रिक्स मल्टीप्लिकेशन कार्यों का परीक्षण करें।
  - **कण भौतिकी का सिमुलेशन**: GPU लोड को दृश्य बनाने के लिए इंटरैक्टिव 3D कण भौतिकी सिमुलेशन का उपयोग करें।

---

### भविष्य का कार्य

सुधारों के लिए योगदान स्वागत है! मुख्य भविष्य के बिंदुओं को कवर करना होगा:

- **बहु-GPU समर्थन**: एनवीएलिंक टॉपोलॉजी के लिए बेहतर हैंडलिंग के साथ एनवीडिया कार्ड सेटअप और एनवीडिया के लिए समर्थन।
- **कंटेनरीकरण**: आधिकारिक डॉकर समर्थन के लिए आसान तैनाती।
- **दूरस्थ पहुँच**: SSH टनलिंग एकीकरण और सुरक्षित दूरस्थ प्रबंधन।
- **प्लेटफ़ॉर्म-अग्नेस**:
  - [ ] लिनक्स समर्थन (यूबंटू/डेबियन फ़ोकस)।
  - [ ] ऐपल सिलिकॉन निगरानी।
- **हार्डवेयर-अग्नेस**:
  - [ ] AMD ROCm समर्थन।
  - [ ] इंटेल आर्क समर्थन।
- **बहु-भाषा दस्तावेज़ीकरण**: GitHub के सबसे लोकप्रिय भाषाओं का समर्थन।

[CONTRIBUTING.md](../CONTRIBUTING.md) देखें कि कैसे शामिल हों।

---

### आवश्यकताएँ

- **OS**: विंडोज़ 10/11
- **पायथन**: 3.10+
- **हार्डवेयर**: एनवीडिया GPU के साथ स्थापित ड्राइवर।
- **CUDA**: टूलकिट 12.x (बेंचमार्किंग/सिमुलेशन सुविधाओं के लिए आवश्यक)।

---

### स्थापना

उपकरण के लिए कई स्थापना विकल्प उपलब्ध हैं:

#### 1. न्यूनतम (केवल CLI)

सर्वर या पृष्ठभूमि निगरानी के लिए सर्वोत्तम, यह CLI केवल विकल्प प्रदान करता है।

#### 2. मानक (CLI + वेब UI)

अधिकांश उपयोगकर्ताओं के लिए सर्वोत्तम, यह वेब डैशबोर्ड, REST API अंक, और वास्तविक समय चार्ट शामिल करता है।

#### 3. पूर्ण (मानक + सिमुलेशन)

विकास और तनाव परीक्षण के लिए सर्वोत्तम, यह सिमुलेशन और बेंचमार्किंग सुविधाएँ प्रदान करता है।

### त्वरित शुरुआत

1. **डाउनलोड** नवीनतम रिलीज़ या रिपॉजिटरी को क्लोन करें।
2. **सेटअप चलाएँ**:

   ```powershell
   .\setup.ps1
   ```

3. **लॉन्च**:

   ```powershell
   # वेब डैशबोर्ड शुरू करें (मानक/पूर्ण)
   python health_monitor.py web

   # CLI शुरू करें
   python health_monitor.py cli
   ```

---

## लाइसेंस

MIT लाइसेंस। [LICENSE](../LICENSE) देखें अधिक जानकारी के लिए।
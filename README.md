fluffy-lawyer
=============

*A legal wizard to help users to understand TOS and similar documents.*

**Dependencies**
* AngularJS
* Font Awesome
* jQuery
* Zurb Foundation

**Configuration**
* Copy the "app" folder.

* Just create a .json file for each document with the following schema and save it in "documents" folder:
    ```json
    {
        "source": "",
        "title": "",
        "minimumScore": 0,
        "video": "",
        "urlOk": "",
        "sections": [],
        "questions": []
    }
    ```

* Point to "app/index.html" from a link during the registration proccess.
  
**Schema explained**
* source: URL of the legal document with legal jargon. It could be a webpage or a file like a PDF.

* title: Title of the document.

* minimumScore: A value between 0 and 100. It is the minimum score to pass the test.

* video: It is the ID on the YouTube's URL. In the following URL: https://www.youtube.com/watch?v=ayFAQ2OoJaA the ID is ayFAQ2OoJaA

* urlOk: The URL where the user is redirected when it passed the test.

* sections: An array of JSON documents structured with the following schema representing resumed sections of the legal document:

    ```json
    {
        "text": "By using 500px you agree to all the terms below."
    }
    ```
    
* questions: An array of JSON documents structured with the following schema:

    ```json
    {
        "text": "What is 500px?",
        "options": [{
            "text": "An ecommerce site",
            "answer": false
        }, {
            "text": "A search engine",
            "answer": false
        }, {
            "text": "A photo community",
            "answer": true
        }]
    }
    ```
    
**Example for a document using text to understand the document**

```json
{
    "source": "https://500px.com/terms",
    "title": "Terms of Service",
    "minimumScore": 75,
    "video": "",
    "urlOk": "../index.html",
    "sections": [{
        "text": "By using 500px you agree to all the terms below."
    }, {
        "text": "We develop a photo community and provide services to create online portfolios and we will develop more features and services in the future. At times things can go wrong and the service may be interrupted. Unlikely, but sometimes things can go really wrong."
    }, {
        "text": "To fully use the services you need to create your own account, without violating other peoples' rights."
    }, {
        "text": "You cannot use our site to post pornographic material, harass people, send spam, negatively vote on all photos, and do other crazy stuff. Be reasonable and responsible, don't do anything stupid and you'll be fine."
    }, {
        "text": "Your photos will preserve whatever copyright they had before uploading to this site. We will protect the copyright and will not sell your photos without your permission."
    }, {
        "text": "We offer free 14 day no-obligation trial to try all the features of Awesome and Plus accounts. Refunds apply only to services described on upgrade page."
    }, {
        "text": "If you use more than your fair share, we may gradually limit your account."
    }, {
        "text": "If you are using the Market to sell prints and downloads of your photos for profit, you give us permission to print photos and deliver downloads. Your photos will be kept safe."
    }, {
        "text": "We respect copyright. If anything is wrong, please send an email with all the details to help@500px.com."
    }, {
        "text": "Some people may post links, we are not responsible for those links."
    }, {
        "text": "We are not liable if something goes really wrong. Always have a backup of your photos."
    }, {
        "text": "Again, we are not liable. But we may pay you $100 if our server flies into your window."
    }, {
        "text": "Please respect our trademarks and brands."
    }, {
        "text": "We may stop providing services at any time. You can stop using your account or close it at any time as well."
    }, {
        "text": "If these terms of use change, we will notify you."
    }, {
        "text": "Things can happen — we are not responsible."
    }],
    "questions": [{
        "text": "By accessing the site, viewing any content or using any services available on the site, are you agreeing to be bound by these terms?",
        "options": [{
            "text": "Yes",
            "answer": true
        }, {
            "text": "No",
            "answer": false
        }]
    }, {
        "text": "What is 500px?",
        "options": [{
            "text": "An ecommerce site",
            "answer": false
        }, {
            "text": "A search engine",
            "answer": false
        }, {
            "text": "A photo community",
            "answer": true
        }]
    }, {
        "text": "Who is responsible for maintaining the confidentiality of your password?",
        "options": [{
            "text": "500px",
            "answer": false
        }, {
            "text": "Google",
            "answer": false
        }, {
            "text": "Me, the user",
            "answer": true
        }, {
            "text": "Aliens",
            "answer": false
        }]
    }]
}
```

**Example for a document using video to understand the document**

```json
{
    "source": "https://www.youtube.com/t/terms",
    "title": "Terms of Service",
    "minimumScore": 100,
    "video": "jURtTZ8qqTc",
    "urlOk": "../index.html",
    "sections": [{
        "text": "Source: Video taken from https://www.youtube.com/watch?v=jURtTZ8qqTc"
    }],
    "questions": [{
        "text": "On YouTube, may you be exposed to content that is inaccurate, offensive, indecent, or objectionable?",
        "options": [{
            "text": "Yes",
            "answer": true
        }, {
            "text": "No",
            "answer": false
        }]
    }, {
        "text": "Can the user upload videos containing paid advertisement?",
        "options": [{
            "text": "Yes",
            "answer": false
        }, {
            "text": "No",
            "answer": true
        }]
    }, {
        "text": "Which of the following videos are not allow on YouTube?",
        "options": [{
            "text": "A video of an aircraft passing above an stadium during the National Anthem.",
            "answer": false
        }, {
            "text": "A video unboxing a new iPhone",
            "answer": false
        }, {
            "text": "A video where a Shakira's song is used as soundtrack",
            "answer": true
        }, {
            "text": "A trailer of Guardians of the Galaxy",
            "answer": false
        }]
    }, {
        "text": "Who retains the video's ownership rights?",
        "options": [{
            "text": "Facebook",
            "answer": false
        }, {
            "text": "Google",
            "answer": false
        }, {
            "text": "Me, the user",
            "answer": true
        }]
    }, {
        "text": "Does Google can use your video for free to use, reproduce, distribute, prepare derivative works of, display, publish and adapt?",
        "options": [{
            "text": "No",
            "answer": false
        }, {
            "text": "Yes",
            "answer": true
        }]
    }]
}
```
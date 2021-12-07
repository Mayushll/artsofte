import {makeAutoObservable} from "mobx";

class Music {
    constructor() {
        makeAutoObservable(this)
    }
    data = {"Root": {
            "Data": [
                {
                    "Received": "Thu, 03 Sep 2015 08:41:05 +0000",
                    "From": "abrakadabra60@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20150903T114105",
                        "_timeShift": "0",
                        "__text": "20150903T084105Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2015-Sep-03_11-41.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "600267",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "800654",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "265"
                },
                {
                    "Received": "Fri, 04 Mar 2016 10:23:53 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160304T132353",
                        "_timeShift": "0",
                        "__text": "20160304T102353Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-04_13-23.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "151725",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "202596",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "517"
                },
                {
                    "Received": "Fri, 04 Mar 2016 11:05:41 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20211207T140541",
                        "_timeShift": "0",
                        "__text": "20160304T110541Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-04_14-05.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "136311",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "182046",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "457"
                },
                {
                    "Received": "Fri, 04 Mar 2016 11:09:21 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160304T140921",
                        "_timeShift": "0",
                        "__text": "20160304T110921Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-04_14-09.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "74667",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "99852",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "17"
                },
                {
                    "Received": "Thu, 10 Mar 2016 05:23:28 +0000",
                    "From": "hamway@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160310T082328",
                        "_timeShift": "0",
                        "__text": "20160310T052328Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-10_08-23.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "39789",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "53353",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "453"
                },
                {
                    "Received": "Thu, 10 Mar 2016 05:29:32 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160310T082932",
                        "_timeShift": "0",
                        "__text": "20160310T052932Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-10_08-29.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1928058",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2571042",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "1547"
                },
                {
                    "Received": "Mon, 21 Mar 2016 13:51:43 +0000",
                    "From": "hamway@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160321T165143",
                        "_timeShift": "0",
                        "__text": "20160321T135143Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-21_16-51.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "137124",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "183129",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "581"
                },
                {
                    "Received": "Mon, 21 Mar 2016 13:52:41 +0000",
                    "From": "hamway@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160321T165241",
                        "_timeShift": "0",
                        "__text": "20160321T135241Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-21_16-52.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "149289",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "199351",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "56"
                },
                {
                    "Received": "Mon, 21 Mar 2016 13:53:43 +0000",
                    "From": "hamway@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160321T165343",
                        "_timeShift": "0",
                        "__text": "20160321T135343Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-21_16-53.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "98190",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "131218",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "1"
                },
                {
                    "Received": "Mon, 21 Mar 2016 13:55:24 +0000",
                    "From": "hamway@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160321T165524",
                        "_timeShift": "0",
                        "__text": "20160321T135524Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-21_16-55.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "116844",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "156091",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "12"
                },
                {
                    "Received": "Tue, 22 Mar 2016 04:49:45 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160322T074945",
                        "_timeShift": "0",
                        "__text": "20160322T044945Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-22_07-49.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "91698",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "122565",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "871"
                },
                {
                    "Received": "Tue, 22 Mar 2016 04:51:18 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160322T075118",
                        "_timeShift": "0",
                        "__text": "20160322T045118Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-22_07-51.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "124146",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "165826",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "437"
                },
                {
                    "Received": "Tue, 22 Mar 2016 04:52:49 +0000",
                    "From": "hamway@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160322T075249",
                        "_timeShift": "0",
                        "__text": "20160322T045249Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-22_07-52.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "196332",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "262074",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "0"
                },
                {
                    "Received": "Tue, 22 Mar 2016 10:55:27 +0000",
                    "From": "ichernyh@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160322T135527",
                        "_timeShift": "0",
                        "__text": "20160322T105527Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-22_13-55.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "432366",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "576788",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "0"
                },
                {
                    "Received": "Tue, 22 Mar 2016 10:59:33 +0000",
                    "From": "ichernyh@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160322T135933",
                        "_timeShift": "0",
                        "__text": "20160322T105933Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-22_13-59.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "104679",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "139870",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "0"
                },
                {
                    "Received": "Tue, 22 Mar 2016 10:59:49 +0000",
                    "From": "ichernyh@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160322T135949",
                        "_timeShift": "0",
                        "__text": "20160322T105949Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-22_13-59.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "30057",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "40375",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "251"
                },
                {
                    "Received": "Tue, 22 Mar 2016 11:53:07 +0000",
                    "From": "ichernyh@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160322T145307",
                        "_timeShift": "0",
                        "__text": "20160322T115307Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-22_14-53.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "58446",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "78226",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "451"
                },
                {
                    "Received": "Wed, 23 Mar 2016 12:43:53 +0000",
                    "From": "itblaster_en@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160323T154353",
                        "_timeShift": "0",
                        "__text": "20160323T124353Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-23_15-43.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "777900",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "1037497",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "743"
                },
                {
                    "Received": "Wed, 23 Mar 2016 14:16:42 +0000",
                    "From": "hamway@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160323T171642",
                        "_timeShift": "0",
                        "__text": "20160323T141642Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-23_17-16.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1915890",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2554818",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "125"
                },
                {
                    "Received": "Wed, 23 Mar 2016 14:19:16 +0000",
                    "From": "hamway@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160323T171916",
                        "_timeShift": "0",
                        "__text": "20160323T141916Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-23_17-19.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1937790",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2584018",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "52"
                },
                {
                    "Received": "Wed, 23 Mar 2016 14:20:28 +0000",
                    "From": "hamway@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160323T172028",
                        "_timeShift": "0",
                        "__text": "20160323T142028Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-23_17-20.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1915077",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2553735",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "17"
                },
                {
                    "Received": "Thu, 24 Mar 2016 06:47:14 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160324T094714",
                        "_timeShift": "0",
                        "__text": "20160324T064714Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-24_09-47.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "927957",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "1237573",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "0"
                },
                {
                    "Received": "Thu, 24 Mar 2016 06:55:57 +0000",
                    "From": "ichernyh@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160324T095557",
                        "_timeShift": "0",
                        "__text": "20160324T065557Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-24_09-55.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "104679",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "139868",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "584"
                },
                {
                    "Received": "Thu, 24 Mar 2016 13:09:30 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160324T160930",
                        "_timeShift": "0",
                        "__text": "20160324T130930Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-24_16-09.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "182544",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "243691",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "5"
                },
                {
                    "Received": "Mon, 28 Mar 2016 11:11:32 +0000",
                    "From": "itblaster_en@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160328T141132",
                        "_timeShift": "0",
                        "__text": "20160328T111132Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-28_14-11.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "34113",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "45782",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "280"
                },
                {
                    "Received": "Mon, 28 Mar 2016 11:12:03 +0000",
                    "From": "ichernyh@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160328T141203",
                        "_timeShift": "0",
                        "__text": "20160328T111203Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-28_14-12.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "45",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "359",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "17"
                },
                {
                    "Received": "Tue, 29 Mar 2016 10:07:04 +0000",
                    "From": "ichernyh@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160329T130704",
                        "_timeShift": "0",
                        "__text": "20160329T100704Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-29_13-07.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "56823",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "76064",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "43"
                },
                {
                    "Received": "Tue, 29 Mar 2016 10:07:26 +0000",
                    "From": "ichernyh@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160329T130726",
                        "_timeShift": "0",
                        "__text": "20160329T100726Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-29_13-07.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "60066",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "80388",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "120"
                },
                {
                    "Received": "Tue, 29 Mar 2016 12:23:26 +0000",
                    "From": "ichernyh@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160329T152326",
                        "_timeShift": "0",
                        "__text": "20160329T122326Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-29_15-23.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1932111",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2576446",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "63"
                },
                {
                    "Received": "Tue, 29 Mar 2016 12:23:51 +0000",
                    "From": "ichernyh@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160329T152351",
                        "_timeShift": "0",
                        "__text": "20160329T122351Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Mar-29_15-23.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1919133",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2559141",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "81"
                },
                {
                    "Received": "Fri, 08 Apr 2016 05:27:19 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160408T082719",
                        "_timeShift": "0",
                        "__text": "20160408T052719Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Apr-08_08-27.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "271767",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "362652",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "742"
                },
                {
                    "Received": "Fri, 08 Apr 2016 05:28:33 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160408T082833",
                        "_timeShift": "0",
                        "__text": "20160408T052833Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Apr-08_08-28.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1942656",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2590507",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "80"
                },
                {
                    "Received": "Fri, 08 Apr 2016 05:31:32 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160408T083132",
                        "_timeShift": "0",
                        "__text": "20160408T053132Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Apr-08_08-31.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "385323",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "514062",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "25"
                },
                {
                    "Received": "Fri, 08 Apr 2016 05:33:41 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160408T083341",
                        "_timeShift": "0",
                        "__text": "20160408T053341Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Apr-08_08-33.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "175245",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "233957",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "31"
                },
                {
                    "Received": "Fri, 08 Apr 2016 05:35:01 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160408T083501",
                        "_timeShift": "0",
                        "__text": "20160408T053501Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Apr-08_08-35.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "856578",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "1142402",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "48"
                },
                {
                    "Received": "Fri, 08 Apr 2016 05:57:12 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160408T085712",
                        "_timeShift": "0",
                        "__text": "20160408T055712Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Apr-08_08-57.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1915077",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2553735",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "26"
                },
                {
                    "Received": "Fri, 08 Apr 2016 05:59:58 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160408T085958",
                        "_timeShift": "0",
                        "__text": "20160408T055958Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Apr-08_08-59.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1940223",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2587262",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "22"
                },
                {
                    "Received": "Fri, 08 Apr 2016 07:03:02 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160408T100302",
                        "_timeShift": "0",
                        "__text": "20160408T070302Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Apr-08_10-03.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "180111",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "240446",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "12"
                },
                {
                    "Received": "Fri, 08 Apr 2016 07:03:33 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160408T100333",
                        "_timeShift": "0",
                        "__text": "20160408T070333Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Apr-08_10-03.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "45",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "357",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "11"
                },
                {
                    "Received": "Fri, 08 Apr 2016 09:47:08 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160408T124708",
                        "_timeShift": "0",
                        "__text": "20160408T094708Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Apr-08_12-47.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1934544",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2579691",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "75"
                },
                {
                    "Received": "Tue, 12 Apr 2016 04:12:27 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160412T071227",
                        "_timeShift": "0",
                        "__text": "20160412T041227Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Apr-12_07-12.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "94944",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "126891",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "23"
                },
                {
                    "Received": "Tue, 12 Apr 2016 04:16:03 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160412T071603",
                        "_timeShift": "0",
                        "__text": "20160412T041603Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Apr-12_07-16.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "45",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "357",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "160"
                },
                {
                    "Received": "Wed, 13 Apr 2016 05:39:06 +0000",
                    "From": "ichernyh@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160413T083906",
                        "_timeShift": "0",
                        "__text": "20160413T053906Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Apr-13_08-39.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "25191",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "33887",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "185"
                },
                {
                    "Received": "Wed, 01 Jun 2016 11:36:13 +0000",
                    "From": "ichernyh@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160601T143613",
                        "_timeShift": "0",
                        "__text": "20160601T113613Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jun-01_14-36.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "324489",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "432953",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "280"
                },
                {
                    "Received": "Sun, 24 Jul 2016 12:47:42 +0000",
                    "From": "d.sikach@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160724T154742",
                        "_timeShift": "0",
                        "__text": "20160724T124742Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jul-24_15-47.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1935357",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2580775",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "256"
                },
                {
                    "Received": "Sun, 24 Jul 2016 12:48:04 +0000",
                    "From": "d.sikach@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160724T154804",
                        "_timeShift": "0",
                        "__text": "20160724T124804Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jul-24_15-48.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1924812",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2566715",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "251"
                },
                {
                    "Received": "Sun, 24 Jul 2016 12:48:48 +0000",
                    "From": "d.sikach@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160724T154848",
                        "_timeShift": "0",
                        "__text": "20160724T124848Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jul-24_15-48.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1926432",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2568876",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "125"
                },
                {
                    "Received": "Sun, 24 Jul 2016 12:48:50 +0000",
                    "From": "d.sikach@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160724T154850",
                        "_timeShift": "0",
                        "__text": "20160724T124850Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jul-24_15-48.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1934544",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2579693",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "180"
                },
                {
                    "Received": "Sun, 24 Jul 2016 12:50:56 +0000",
                    "From": "d.sikach@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160724T155056",
                        "_timeShift": "0",
                        "__text": "20160724T125056Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jul-24_15-50.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1927245",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2569959",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "361"
                },
                {
                    "Received": "Sun, 24 Jul 2016 12:55:46 +0000",
                    "From": "d.sikach@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160724T155546",
                        "_timeShift": "0",
                        "__text": "20160724T125546Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jul-24_15-55.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1919946",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2560226",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "142"
                },
                {
                    "Received": "Sun, 24 Jul 2016 12:56:28 +0000",
                    "From": "d.sikach@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160724T155628",
                        "_timeShift": "0",
                        "__text": "20160724T125628Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jul-24_15-56.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1917513",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2556982",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "259"
                },
                {
                    "Received": "Sun, 24 Jul 2016 13:01:50 +0000",
                    "From": "d.sikach@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160724T160150",
                        "_timeShift": "0",
                        "__text": "20160724T130150Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jul-24_16-01.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1936167",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2581854",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "25"
                },
                {
                    "Received": "Sun, 24 Jul 2016 13:22:34 +0000",
                    "From": "d.sikach@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160724T162234",
                        "_timeShift": "0",
                        "__text": "20160724T132234Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jul-24_16-22.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1937790",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2584020",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "17"
                },
                {
                    "Received": "Sun, 24 Jul 2016 13:23:39 +0000",
                    "From": "d.sikach@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160724T162339",
                        "_timeShift": "0",
                        "__text": "20160724T132339Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jul-24_16-23.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1932111",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2576448",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "73"
                },
                {
                    "Received": "Sun, 24 Jul 2016 13:23:40 +0000",
                    "From": "d.sikach@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160724T162340",
                        "_timeShift": "0",
                        "__text": "20160724T132340Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jul-24_16-23.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1931298",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2575365",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "49"
                },
                {
                    "Received": "Sun, 24 Jul 2016 13:23:41 +0000",
                    "From": "d.sikach@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160724T162341",
                        "_timeShift": "0",
                        "__text": "20160724T132341Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jul-24_16-23.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1928865",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2572121",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "45"
                },
                {
                    "Received": "Mon, 25 Jul 2016 06:31:21 +0000",
                    "From": "webrtc_freecall@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160725T093121",
                        "_timeShift": "0",
                        "__text": "20160725T063121Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Jul-25_09-31.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "671646",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "895826",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "0"
                },
                {
                    "Received": "Fri, 16 Sep 2016 06:03:27 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160916T090327",
                        "_timeShift": "0",
                        "__text": "20160916T060327Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Sep-16_09-03.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "27624",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "37131",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "19"
                },
                {
                    "Received": "Fri, 16 Sep 2016 07:55:06 +0000",
                    "From": "kmal@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160916T105506",
                        "_timeShift": "0",
                        "__text": "20160916T075506Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Sep-16_10-55.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1943466",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2591588",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "280"
                },
                {
                    "Received": "Tue, 20 Sep 2016 11:27:05 +0000",
                    "From": "bulgakova.m@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160920T142705",
                        "_timeShift": "0",
                        "__text": "20160920T112705Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Sep-20_14-27.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "979056",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "1305709",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "25"
                },
                {
                    "Received": "Wed, 28 Sep 2016 08:17:54 +0000",
                    "From": "bulgakova.m@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20160928T111754",
                        "_timeShift": "0",
                        "__text": "20160928T081754Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Sep-28_11-17.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1911024",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2548329",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "17"
                },
                {
                    "Received": "Fri, 28 Oct 2016 07:06:41 +0000",
                    "From": "+79258000138@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20161028T100641",
                        "_timeShift": "0",
                        "__text": "20161028T070641Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Oct-28_10-06.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "1539534",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "2053008",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "43"
                },
                {
                    "Received": "Fri, 28 Oct 2016 10:44:56 +0000",
                    "From": "+79995100405@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20161028T134456",
                        "_timeShift": "0",
                        "__text": "20161028T104456Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Oct-28_13-44.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "81156",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "108507",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "81"
                },
                {
                    "Received": "Fri, 28 Oct 2016 10:45:20 +0000",
                    "From": "+79995100405@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20161028T134520",
                        "_timeShift": "0",
                        "__text": "20161028T104520Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Oct-28_13-45.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "11400",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "15499",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "251"
                },
                {
                    "Received": "Thu, 03 Nov 2016 12:06:33 +0000",
                    "From": "bulgakova.m@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20211129T150633",
                        "_timeShift": "0",
                        "__text": "20211201T120633Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Nov-03_15-06.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "747078",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "996402",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "472"
                },
                {
                    "Received": "Thu, 03 Nov 2016 12:07:07 +0000",
                    "From": "bulgakova.m@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20161103T150707",
                        "_timeShift": "0",
                        "__text": "20161103T120707Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Nov-03_15-07.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "256356",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "342107",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "581"
                },
                {
                    "Received": "Thu, 08 Dec 2016 10:20:18 +0000",
                    "From": "ichernyh@sip2sip.info",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20211207T132018",
                        "_timeShift": "0",
                        "__text": "20211115T102018Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Dec-08_13-20.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "133065",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "177721",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "50"
                },
                {
                    "Received": "Thu, 08 Dec 2016 10:20:36 +0000",
                    "From": "ichernyh@sip2sip.info",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20161208T132036",
                        "_timeShift": "0",
                        "__text": "20161208T102036Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Dec-08_13-20.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "25191",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "33887",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "43"
                },
                {
                    "Received": "Wed, 14 Dec 2016 07:49:23 +0000",
                    "From": "mashorg@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20211101T104923",
                        "_timeShift": "0",
                        "__text": "20211201T074923Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Dec-14_10-49.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "18699",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "25232",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "11"
                },
                {
                    "Received": "Wed, 14 Dec 2016 07:50:12 +0000",
                    "From": "mashorg@example.com",
                    "To": "itblaster@example.com",
                    "Date": {
                        "_localTime": "20211206T105012",
                        "_timeShift": "0",
                        "__text": "20211130T075012Z"
                    },
                    "MIME": {
                        "MIME": {
                            "_disposition": "inline",
                            "_Disposition-filename": "vmail-2016-Dec-14_10-50.wav",
                            "_Disposition-voice": "voice-message",
                            "_estimatedSize": "12213",
                            "_partID": "01",
                            "_subtype": "32kadpcm",
                            "_type": "audio"
                        },
                        "_class": "audio",
                        "_estimatedSize": "16582",
                        "_subtype": "voice-message",
                        "_type": "multipart"
                    },
                    "Duration": "28"
                }
            ]
        }

    }
    filteredData = this.data
    toHumanFormat() {
        this.filteredData.Root.Data.forEach(
            item => {
                //Преобразуем дату для отображения
                item.VisualReceived = item.Date._localTime.slice(0, 4)+"."+
                    item.Date._localTime.slice(4, 6)+"."+ item.Date._localTime.slice(6, 8)+" "+item.Date._localTime.slice(9,11)+":"+ "" +
                    item.Date._localTime.slice(11, 13)
                //Преобразуем длительность для отображения
                let minutes = Math.floor(+item.Duration / 60)
                minutes = minutes > 10 ? minutes : "0" + minutes
                let seconds = Math.floor(+item.Duration % 60)
                seconds = seconds > 10 ? seconds : "0" + seconds
                item.VisualDuration = minutes + ":" + seconds
                //Преобразуем дату для фильтра
                item.correctDate = new Date(item.Date._localTime.slice(0, 4)+"-"+
                    item.Date._localTime.slice(4, 6)+"-"+ item.Date._localTime.slice(6, 11)+":"+
                    item.Date._localTime.slice(11, 13) + ":" + item.Date._localTime.slice(13, 15))
                item.correctDate = item.correctDate.getTime()
            }
        )
    }
    filter(minutes, durationFilter, dateFilter) {
        let state = this.data.Root.Data.slice()
        if (minutes) {
            state = state.filter(
                item => item.Duration < 60 * minutes
            )
        }
        if (durationFilter) {
            state = state.filter(
                item => item.From.toLowerCase().includes(durationFilter)
            )
        }
        if (dateFilter){
            let yesterday = Date.now() - 86400000
            let beforeYesterday = Date.now() - 172800000
            let lastWeek = Date.now() - 604800000
            let beforeLastWeek = Date.now() - 1209600000
            let lastMonth = Date.now() - 2592000000
            let beforeLastMonth = Date.now() - 5184000000
            switch (dateFilter) {
                case "allTime":
                    state = state.filter(item => item)
                    break
                case "today":
                    state = state.filter(item => item.correctDate > yesterday)
                    break
                case "yesterday":
                    state = state.filter(item => item.correctDate > beforeYesterday && item.correctDate < yesterday)
                    break
                case "lastWeek":
                    state = state.filter(item => item.correctDate > beforeLastWeek && item.correctDate < lastWeek)
                    break
                case "lastMonth":
                    state = state.filter(item => item.correctDate > beforeLastMonth && item.correctDate < lastMonth)
                    break
                case "currentMonth":
                    state = state.filter(item => item.correctDate > lastMonth)
                    break
                default:
            }
        }
        this.filteredData.Root.Data = state
    }

    restart(){
        this.filteredData.Root.Data = this.data.Root.Data
    }

}

export default new Music()


/*    xml = ' <Root> '+
         '  <Data><Received>Thu, 03 Sep 2015 08:41:05 +0000</Received><From>abrakadabra60@example.com</From><To>itblaster@example.com</To><Date localTime="20150903T114105" timeShift="0">20150903T084105Z</Date><MIME class="audio" estimatedSize="800654" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2015-Sep-03_11-41.wav" Disposition-voice="voice-message" estimatedSize="600267" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>265</Duration></Data>' +
        '   <Data><Received>Fri, 04 Mar 2016 10:23:53 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160304T132353" timeShift="0">20160304T102353Z</Date><MIME class="audio" estimatedSize="202596" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-04_13-23.wav" Disposition-voice="voice-message" estimatedSize="151725" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>517</Duration></Data>'+
        '   <Data><Received>Fri, 04 Mar 2016 11:05:41 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160304T140541" timeShift="0">20160304T110541Z</Date><MIME class="audio" estimatedSize="182046" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-04_14-05.wav" Disposition-voice="voice-message" estimatedSize="136311" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>457</Duration></Data>'+
        '   <Data><Received>Fri, 04 Mar 2016 11:09:21 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160304T140921" timeShift="0">20160304T110921Z</Date><MIME class="audio" estimatedSize="99852" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-04_14-09.wav" Disposition-voice="voice-message" estimatedSize="74667" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>17</Duration></Data>'+
        '   <Data><Received>Thu, 10 Mar 2016 05:23:28 +0000</Received><From>hamway@example.com</From><To>itblaster@example.com</To><Date localTime="20160310T082328" timeShift="0">20160310T052328Z</Date><MIME class="audio" estimatedSize="53353" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-10_08-23.wav" Disposition-voice="voice-message" estimatedSize="39789" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>453</Duration></Data>'+
        '   <Data><Received>Thu, 10 Mar 2016 05:29:32 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160310T082932" timeShift="0">20160310T052932Z</Date><MIME class="audio" estimatedSize="2571042" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-10_08-29.wav" Disposition-voice="voice-message" estimatedSize="1928058" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>1547</Duration></Data>'+
        '   <Data><Received>Mon, 21 Mar 2016 13:51:43 +0000</Received><From>hamway@example.com</From><To>itblaster@example.com</To><Date localTime="20160321T165143" timeShift="0">20160321T135143Z</Date><MIME class="audio" estimatedSize="183129" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-21_16-51.wav" Disposition-voice="voice-message" estimatedSize="137124" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>581</Duration></Data>'+
        '   <Data><Received>Mon, 21 Mar 2016 13:52:41 +0000</Received><From>hamway@example.com</From><To>itblaster@example.com</To><Date localTime="20160321T165241" timeShift="0">20160321T135241Z</Date><MIME class="audio" estimatedSize="199351" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-21_16-52.wav" Disposition-voice="voice-message" estimatedSize="149289" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>56</Duration></Data>'+
        '   <Data><Received>Mon, 21 Mar 2016 13:53:43 +0000</Received><From>hamway@example.com</From><To>itblaster@example.com</To><Date localTime="20160321T165343" timeShift="0">20160321T135343Z</Date><MIME class="audio" estimatedSize="131218" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-21_16-53.wav" Disposition-voice="voice-message" estimatedSize="98190" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>DateFilter</Duration></Data>'+
        '   <Data><Received>Mon, 21 Mar 2016 13:55:24 +0000</Received><From>hamway@example.com</From><To>itblaster@example.com</To><Date localTime="20160321T165524" timeShift="0">20160321T135524Z</Date><MIME class="audio" estimatedSize="156091" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-21_16-55.wav" Disposition-voice="voice-message" estimatedSize="116844" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>12</Duration></Data>'+
        '   <Data><Received>Tue, 22 Mar 2016 04:49:45 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160322T074945" timeShift="0">20160322T044945Z</Date><MIME class="audio" estimatedSize="122565" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-22_07-49.wav" Disposition-voice="voice-message" estimatedSize="91698" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>871</Duration></Data>'+
        '   <Data><Received>Tue, 22 Mar 2016 04:51:18 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160322T075118" timeShift="0">20160322T045118Z</Date><MIME class="audio" estimatedSize="165826" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-22_07-51.wav" Disposition-voice="voice-message" estimatedSize="124146" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>437</Duration></Data>'+
        '  <Data><Received>Tue, 22 Mar 2016 04:52:49 +0000</Received><From>hamway@example.com</From><To>itblaster@example.com</To><Date localTime="20160322T075249" timeShift="0">20160322T045249Z</Date><MIME class="audio" estimatedSize="262074" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-22_07-52.wav" Disposition-voice="voice-message" estimatedSize="196332" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>0</Duration></Data>'+
        '   <Data><Received>Tue, 22 Mar 2016 10:55:27 +0000</Received><From>ichernyh@example.com</From><To>itblaster@example.com</To><Date localTime="20160322T135527" timeShift="0">20160322T105527Z</Date><MIME class="audio" estimatedSize="576788" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-22_13-55.wav" Disposition-voice="voice-message" estimatedSize="432366" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>0</Duration></Data>'+
        '    <Data><Received>Tue, 22 Mar 2016 10:59:33 +0000</Received><From>ichernyh@example.com</From><To>itblaster@example.com</To><Date localTime="20160322T135933" timeShift="0">20160322T105933Z</Date><MIME class="audio" estimatedSize="139870" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-22_13-59.wav" Disposition-voice="voice-message" estimatedSize="104679" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>0</Duration></Data>'+
        '   <Data><Received>Tue, 22 Mar 2016 10:59:49 +0000</Received><From>ichernyh@example.com</From><To>itblaster@example.com</To><Date localTime="20160322T135949" timeShift="0">20160322T105949Z</Date><MIME class="audio" estimatedSize="40375" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-22_13-59.wav" Disposition-voice="voice-message" estimatedSize="30057" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>251</Duration></Data>'+
        '   <Data><Received>Tue, 22 Mar 2016 11:53:07 +0000</Received><From>ichernyh@example.com</From><To>itblaster@example.com</To><Date localTime="20160322T145307" timeShift="0">20160322T115307Z</Date><MIME class="audio" estimatedSize="78226" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-22_14-53.wav" Disposition-voice="voice-message" estimatedSize="58446" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>451</Duration></Data>'+
        '    <Data><Received>Wed, 23 Mar 2016 12:43:53 +0000</Received><From>itblaster_en@example.com</From><To>itblaster@example.com</To><Date localTime="20160323T154353" timeShift="0">20160323T124353Z</Date><MIME class="audio" estimatedSize="1037497" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-23_15-43.wav" Disposition-voice="voice-message" estimatedSize="777900" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>743</Duration></Data>'+
        '   <Data><Received>Wed, 23 Mar 2016 14:16:42 +0000</Received><From>hamway@example.com</From><To>itblaster@example.com</To><Date localTime="20160323T171642" timeShift="0">20160323T141642Z</Date><MIME class="audio" estimatedSize="2554818" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-23_17-16.wav" Disposition-voice="voice-message" estimatedSize="1915890" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>125</Duration></Data>'+
        '    <Data><Received>Wed, 23 Mar 2016 14:19:16 +0000</Received><From>hamway@example.com</From><To>itblaster@example.com</To><Date localTime="20160323T171916" timeShift="0">20160323T141916Z</Date><MIME class="audio" estimatedSize="2584018" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-23_17-19.wav" Disposition-voice="voice-message" estimatedSize="1937790" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>52</Duration></Data>'+
        '    <Data><Received>Wed, 23 Mar 2016 14:20:28 +0000</Received><From>hamway@example.com</From><To>itblaster@example.com</To><Date localTime="20160323T172028" timeShift="0">20160323T142028Z</Date><MIME class="audio" estimatedSize="2553735" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-23_17-20.wav" Disposition-voice="voice-message" estimatedSize="1915077" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>17</Duration></Data>'+
        '    <Data><Received>Thu, 24 Mar 2016 06:47:14 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160324T094714" timeShift="0">20160324T064714Z</Date><MIME class="audio" estimatedSize="1237573" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-24_09-47.wav" Disposition-voice="voice-message" estimatedSize="927957" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>0</Duration></Data>'+
        '    <Data><Received>Thu, 24 Mar 2016 06:55:57 +0000</Received><From>ichernyh@example.com</From><To>itblaster@example.com</To><Date localTime="20160324T095557" timeShift="0">20160324T065557Z</Date><MIME class="audio" estimatedSize="139868" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-24_09-55.wav" Disposition-voice="voice-message" estimatedSize="104679" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>584</Duration></Data>'+
        '    <Data><Received>Thu, 24 Mar 2016 13:09:30 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160324T160930" timeShift="0">20160324T130930Z</Date><MIME class="audio" estimatedSize="243691" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-24_16-09.wav" Disposition-voice="voice-message" estimatedSize="182544" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>5</Duration></Data>'+
        '    <Data><Received>Mon, 28 Mar 2016 11:11:32 +0000</Received><From>itblaster_en@example.com</From><To>itblaster@example.com</To><Date localTime="20160328T141132" timeShift="0">20160328T111132Z</Date><MIME class="audio" estimatedSize="45782" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-28_14-11.wav" Disposition-voice="voice-message" estimatedSize="34113" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>280</Duration></Data>'+
        '   <Data><Received>Mon, 28 Mar 2016 11:12:03 +0000</Received><From>ichernyh@example.com</From><To>itblaster@example.com</To><Date localTime="20160328T141203" timeShift="0">20160328T111203Z</Date><MIME class="audio" estimatedSize="359" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-28_14-12.wav" Disposition-voice="voice-message" estimatedSize="45" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>17</Duration></Data>'+
        '    <Data><Received>Tue, 29 Mar 2016 10:07:04 +0000</Received><From>ichernyh@example.com</From><To>itblaster@example.com</To><Date localTime="20160329T130704" timeShift="0">20160329T100704Z</Date><MIME class="audio" estimatedSize="76064" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-29_13-07.wav" Disposition-voice="voice-message" estimatedSize="56823" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>43</Duration></Data>'+
        '    <Data><Received>Tue, 29 Mar 2016 10:07:26 +0000</Received><From>ichernyh@example.com</From><To>itblaster@example.com</To><Date localTime="20160329T130726" timeShift="0">20160329T100726Z</Date><MIME class="audio" estimatedSize="80388" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-29_13-07.wav" Disposition-voice="voice-message" estimatedSize="60066" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>120</Duration></Data>'+
        '    <Data><Received>Tue, 29 Mar 2016 12:23:26 +0000</Received><From>ichernyh@example.com</From><To>itblaster@example.com</To><Date localTime="20160329T152326" timeShift="0">20160329T122326Z</Date><MIME class="audio" estimatedSize="2576446" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-29_15-23.wav" Disposition-voice="voice-message" estimatedSize="1932111" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>63</Duration></Data>'+
        '   <Data><Received>Tue, 29 Mar 2016 12:23:51 +0000</Received><From>ichernyh@example.com</From><To>itblaster@example.com</To><Date localTime="20160329T152351" timeShift="0">20160329T122351Z</Date><MIME class="audio" estimatedSize="2559141" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Mar-29_15-23.wav" Disposition-voice="voice-message" estimatedSize="1919133" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>81</Duration></Data>'+
        '   <Data><Received>Fri, 08 Apr 2016 05:27:19 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160408T082719" timeShift="0">20160408T052719Z</Date><MIME class="audio" estimatedSize="362652" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Apr-08_08-27.wav" Disposition-voice="voice-message" estimatedSize="271767" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>742</Duration></Data>'+
        '    <Data><Received>Fri, 08 Apr 2016 05:28:33 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160408T082833" timeShift="0">20160408T052833Z</Date><MIME class="audio" estimatedSize="2590507" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Apr-08_08-28.wav" Disposition-voice="voice-message" estimatedSize="1942656" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>80</Duration></Data>'+
        '    <Data><Received>Fri, 08 Apr 2016 05:31:32 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160408T083132" timeShift="0">20160408T053132Z</Date><MIME class="audio" estimatedSize="514062" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Apr-08_08-31.wav" Disposition-voice="voice-message" estimatedSize="385323" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>25</Duration></Data>'+
        '    <Data><Received>Fri, 08 Apr 2016 05:33:41 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160408T083341" timeShift="0">20160408T053341Z</Date><MIME class="audio" estimatedSize="233957" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Apr-08_08-33.wav" Disposition-voice="voice-message" estimatedSize="175245" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>31</Duration></Data>'+
        '   <Data><Received>Fri, 08 Apr 2016 05:35:01 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160408T083501" timeShift="0">20160408T053501Z</Date><MIME class="audio" estimatedSize="1142402" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Apr-08_08-35.wav" Disposition-voice="voice-message" estimatedSize="856578" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>48</Duration></Data>'+
        '   <Data><Received>Fri, 08 Apr 2016 05:57:12 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160408T085712" timeShift="0">20160408T055712Z</Date><MIME class="audio" estimatedSize="2553735" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Apr-08_08-57.wav" Disposition-voice="voice-message" estimatedSize="1915077" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>26</Duration></Data>'+
        '   <Data><Received>Fri, 08 Apr 2016 05:59:58 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160408T085958" timeShift="0">20160408T055958Z</Date><MIME class="audio" estimatedSize="2587262" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Apr-08_08-59.wav" Disposition-voice="voice-message" estimatedSize="1940223" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>22</Duration></Data>'+
        '   <Data><Received>Fri, 08 Apr 2016 07:03:02 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160408T100302" timeShift="0">20160408T070302Z</Date><MIME class="audio" estimatedSize="240446" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Apr-08_10-03.wav" Disposition-voice="voice-message" estimatedSize="180111" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>12</Duration></Data>'+
        '   <Data><Received>Fri, 08 Apr 2016 07:03:33 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160408T100333" timeShift="0">20160408T070333Z</Date><MIME class="audio" estimatedSize="357" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Apr-08_10-03.wav" Disposition-voice="voice-message" estimatedSize="45" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>11</Duration></Data>'+
        '   <Data><Received>Fri, 08 Apr 2016 09:47:08 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160408T124708" timeShift="0">20160408T094708Z</Date><MIME class="audio" estimatedSize="2579691" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Apr-08_12-47.wav" Disposition-voice="voice-message" estimatedSize="1934544" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>75</Duration></Data>'+
        '   <Data><Received>Tue, 12 Apr 2016 04:12:27 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160412T071227" timeShift="0">20160412T041227Z</Date><MIME class="audio" estimatedSize="126891" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Apr-12_07-12.wav" Disposition-voice="voice-message" estimatedSize="94944" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>23</Duration></Data>'+
        '   <Data><Received>Tue, 12 Apr 2016 04:16:03 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160412T071603" timeShift="0">20160412T041603Z</Date><MIME class="audio" estimatedSize="357" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Apr-12_07-16.wav" Disposition-voice="voice-message" estimatedSize="45" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>160</Duration></Data>'+
        '   <Data><Received>Wed, 13 Apr 2016 05:39:06 +0000</Received><From>ichernyh@example.com</From><To>itblaster@example.com</To><Date localTime="20160413T083906" timeShift="0">20160413T053906Z</Date><MIME class="audio" estimatedSize="33887" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Apr-13_08-39.wav" Disposition-voice="voice-message" estimatedSize="25191" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>185</Duration></Data>'+
        '    <Data><Received>Wed, 01 Jun 2016 11:36:13 +0000</Received><From>ichernyh@example.com</From><To>itblaster@example.com</To><Date localTime="20160601T143613" timeShift="0">20160601T113613Z</Date><MIME class="audio" estimatedSize="432953" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jun-01_14-36.wav" Disposition-voice="voice-message" estimatedSize="324489" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>280</Duration></Data>'+
        '    <Data><Received>Sun, 24 Jul 2016 12:47:42 +0000</Received><From>d.sikach@example.com</From><To>itblaster@example.com</To><Date localTime="20160724T154742" timeShift="0">20160724T124742Z</Date><MIME class="audio" estimatedSize="2580775" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jul-24_15-47.wav" Disposition-voice="voice-message" estimatedSize="1935357" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>256</Duration></Data>'+
        '   <Data><Received>Sun, 24 Jul 2016 12:48:04 +0000</Received><From>d.sikach@example.com</From><To>itblaster@example.com</To><Date localTime="20160724T154804" timeShift="0">20160724T124804Z</Date><MIME class="audio" estimatedSize="2566715" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jul-24_15-48.wav" Disposition-voice="voice-message" estimatedSize="1924812" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>251</Duration></Data>'+
        '   <Data><Received>Sun, 24 Jul 2016 12:48:48 +0000</Received><From>d.sikach@example.com</From><To>itblaster@example.com</To><Date localTime="20160724T154848" timeShift="0">20160724T124848Z</Date><MIME class="audio" estimatedSize="2568876" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jul-24_15-48.wav" Disposition-voice="voice-message" estimatedSize="1926432" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>125</Duration></Data>'+
        '    <Data><Received>Sun, 24 Jul 2016 12:48:50 +0000</Received><From>d.sikach@example.com</From><To>itblaster@example.com</To><Date localTime="20160724T154850" timeShift="0">20160724T124850Z</Date><MIME class="audio" estimatedSize="2579693" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jul-24_15-48.wav" Disposition-voice="voice-message" estimatedSize="1934544" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>180</Duration></Data>'+
        '    <Data><Received>Sun, 24 Jul 2016 12:50:56 +0000</Received><From>d.sikach@example.com</From><To>itblaster@example.com</To><Date localTime="20160724T155056" timeShift="0">20160724T125056Z</Date><MIME class="audio" estimatedSize="2569959" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jul-24_15-50.wav" Disposition-voice="voice-message" estimatedSize="1927245" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>361</Duration></Data>'+
        '    <Data><Received>Sun, 24 Jul 2016 12:55:46 +0000</Received><From>d.sikach@example.com</From><To>itblaster@example.com</To><Date localTime="20160724T155546" timeShift="0">20160724T125546Z</Date><MIME class="audio" estimatedSize="2560226" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jul-24_15-55.wav" Disposition-voice="voice-message" estimatedSize="1919946" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>142</Duration></Data>'+
        '    <Data><Received>Sun, 24 Jul 2016 12:56:28 +0000</Received><From>d.sikach@example.com</From><To>itblaster@example.com</To><Date localTime="20160724T155628" timeShift="0">20160724T125628Z</Date><MIME class="audio" estimatedSize="2556982" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jul-24_15-56.wav" Disposition-voice="voice-message" estimatedSize="1917513" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>259</Duration></Data>'+
        '    <Data><Received>Sun, 24 Jul 2016 13:01:50 +0000</Received><From>d.sikach@example.com</From><To>itblaster@example.com</To><Date localTime="20160724T160150" timeShift="0">20160724T130150Z</Date><MIME class="audio" estimatedSize="2581854" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jul-24_16-01.wav" Disposition-voice="voice-message" estimatedSize="1936167" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>25</Duration></Data>'+
        '    <Data><Received>Sun, 24 Jul 2016 13:22:34 +0000</Received><From>d.sikach@example.com</From><To>itblaster@example.com</To><Date localTime="20160724T162234" timeShift="0">20160724T132234Z</Date><MIME class="audio" estimatedSize="2584020" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jul-24_16-22.wav" Disposition-voice="voice-message" estimatedSize="1937790" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>17</Duration></Data>'+
        '    <Data><Received>Sun, 24 Jul 2016 13:23:39 +0000</Received><From>d.sikach@example.com</From><To>itblaster@example.com</To><Date localTime="20160724T162339" timeShift="0">20160724T132339Z</Date><MIME class="audio" estimatedSize="2576448" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jul-24_16-23.wav" Disposition-voice="voice-message" estimatedSize="1932111" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>73</Duration></Data>'+
        '    <Data><Received>Sun, 24 Jul 2016 13:23:40 +0000</Received><From>d.sikach@example.com</From><To>itblaster@example.com</To><Date localTime="20160724T162340" timeShift="0">20160724T132340Z</Date><MIME class="audio" estimatedSize="2575365" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jul-24_16-23.wav" Disposition-voice="voice-message" estimatedSize="1931298" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>49</Duration></Data>'+
        '    <Data><Received>Sun, 24 Jul 2016 13:23:41 +0000</Received><From>d.sikach@example.com</From><To>itblaster@example.com</To><Date localTime="20160724T162341" timeShift="0">20160724T132341Z</Date><MIME class="audio" estimatedSize="2572121" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jul-24_16-23.wav" Disposition-voice="voice-message" estimatedSize="1928865" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>45</Duration></Data>'+
        '    <Data><Received>Mon, 25 Jul 2016 06:31:21 +0000</Received><From>webrtc_freecall@example.com</From><To>itblaster@example.com</To><Date localTime="20160725T093121" timeShift="0">20160725T063121Z</Date><MIME class="audio" estimatedSize="895826" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Jul-25_09-31.wav" Disposition-voice="voice-message" estimatedSize="671646" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>0</Duration></Data>'+
        '    <Data><Received>Fri, 16 Sep 2016 06:03:27 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160916T090327" timeShift="0">20160916T060327Z</Date><MIME class="audio" estimatedSize="37131" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Sep-16_09-03.wav" Disposition-voice="voice-message" estimatedSize="27624" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>19</Duration></Data>'+
        '    <Data><Received>Fri, 16 Sep 2016 07:55:06 +0000</Received><From>kmal@example.com</From><To>itblaster@example.com</To><Date localTime="20160916T105506" timeShift="0">20160916T075506Z</Date><MIME class="audio" estimatedSize="2591588" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Sep-16_10-55.wav" Disposition-voice="voice-message" estimatedSize="1943466" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>280</Duration></Data>'+
        '    <Data><Received>Tue, 20 Sep 2016 11:27:05 +0000</Received><From>bulgakova.m@example.com</From><To>itblaster@example.com</To><Date localTime="20160920T142705" timeShift="0">20160920T112705Z</Date><MIME class="audio" estimatedSize="1305709" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Sep-20_14-27.wav" Disposition-voice="voice-message" estimatedSize="979056" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>25</Duration></Data>'+
        '    <Data><Received>Wed, 28 Sep 2016 08:17:54 +0000</Received><From>bulgakova.m@example.com</From><To>itblaster@example.com</To><Date localTime="20160928T111754" timeShift="0">20160928T081754Z</Date><MIME class="audio" estimatedSize="2548329" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Sep-28_11-17.wav" Disposition-voice="voice-message" estimatedSize="1911024" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>17</Duration></Data>'+
        '    <Data><Received>Fri, 28 Oct 2016 07:06:41 +0000</Received><From>+79258000138@example.com</From><To>itblaster@example.com</To><Date localTime="20161028T100641" timeShift="0">20161028T070641Z</Date><MIME class="audio" estimatedSize="2053008" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Oct-28_10-06.wav" Disposition-voice="voice-message" estimatedSize="1539534" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>43</Duration></Data>'+
        '    <Data><Received>Fri, 28 Oct 2016 10:44:56 +0000</Received><From>+79995100405@example.com</From><To>itblaster@example.com</To><Date localTime="20161028T134456" timeShift="0">20161028T104456Z</Date><MIME class="audio" estimatedSize="108507" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Oct-28_13-44.wav" Disposition-voice="voice-message" estimatedSize="81156" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>81</Duration></Data>'+
        '    <Data><Received>Fri, 28 Oct 2016 10:45:20 +0000</Received><From>+79995100405@example.com</From><To>itblaster@example.com</To><Date localTime="20161028T134520" timeShift="0">20161028T104520Z</Date><MIME class="audio" estimatedSize="15499" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Oct-28_13-45.wav" Disposition-voice="voice-message" estimatedSize="11400" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>251</Duration></Data>'+
        '    <Data><Received>Thu, 03 Nov 2016 12:06:33 +0000</Received><From>bulgakova.m@example.com</From><To>itblaster@example.com</To><Date localTime="20161103T150633" timeShift="0">20161103T120633Z</Date><MIME class="audio" estimatedSize="996402" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Nov-03_15-06.wav" Disposition-voice="voice-message" estimatedSize="747078" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>472</Duration></Data>'+
        '    <Data><Received>Thu, 03 Nov 2016 12:07:07 +0000</Received><From>bulgakova.m@example.com</From><To>itblaster@example.com</To><Date localTime="20161103T150707" timeShift="0">20161103T120707Z</Date><MIME class="audio" estimatedSize="342107" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Nov-03_15-07.wav" Disposition-voice="voice-message" estimatedSize="256356" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>581</Duration></Data>'+
        '   <Data><Received>Thu, 08 Dec 2016 10:20:18 +0000</Received><From>ichernyh@sip2sip.info</From><To>itblaster@example.com</To><Date localTime="20161208T132018" timeShift="0">20161208T102018Z</Date><MIME class="audio" estimatedSize="177721" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Dec-08_13-20.wav" Disposition-voice="voice-message" estimatedSize="133065" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>50</Duration></Data>'+
        '    <Data><Received>Thu, 08 Dec 2016 10:20:36 +0000</Received><From>ichernyh@sip2sip.info</From><To>itblaster@example.com</To><Date localTime="20161208T132036" timeShift="0">20161208T102036Z</Date><MIME class="audio" estimatedSize="33887" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Dec-08_13-20.wav" Disposition-voice="voice-message" estimatedSize="25191" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>43</Duration></Data>'+
        '   <Data><Received>Wed, 14 Dec 2016 07:49:23 +0000</Received><From>mashorg@example.com</From><To>itblaster@example.com</To><Date localTime="20161214T104923" timeShift="0">20161214T074923Z</Date><MIME class="audio" estimatedSize="25232" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Dec-14_10-49.wav" Disposition-voice="voice-message" estimatedSize="18699" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>11</Duration></Data>'+
        '    <Data><Received>Wed, 14 Dec 2016 07:50:12 +0000</Received><From>mashorg@example.com</From><To>itblaster@example.com</To><Date localTime="20161214T105012" timeShift="0">20161214T075012Z</Date><MIME class="audio" estimatedSize="16582" subtype="voice-message" type="multipart"><MIME disposition="inline" Disposition-filename="vmail-2016-Dec-14_10-50.wav" Disposition-voice="voice-message" estimatedSize="12213" partID="01" subtype="32kadpcm" type="audio"/></MIME><Duration>28</Duration></Data>'+
        ' </Root> '*/


/*    console.log(now)
    console.log(now.getDay()+" "+now.getMonth()+ " " +now.getFullYear())
    console.log(yesterday)
    console.log(yesterday.getDay()+" "+yesterday.getMonth()+ " " +yesterday.getFullYear())*/
/*      let currentMonth = currentDate.getMonth() + DateFilter;
      currentMonth = currentMonth>10 ? currentMonth : "0" + currentMonth
      let currentDay = currentDate.getDate();
      currentDay = currentDay>10 ? currentDay : "0" + currentDay
      let currentYear = currentDate.getFullYear();*/
/* date = year + month + day;*/
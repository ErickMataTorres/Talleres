﻿// You'll need to make your image into a Data URL
// Use http://dataurl.net/#dataurlmaker

var imgData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAisAAADnCAYAAADfGxbOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAQURJREFUeNrsnU1y2zrQrnFSmR+m6s4PvYLIkzs1tQJLK7A0vRNbK7C1AtmTbyp5BZZXYHp6J1ZWYGZ+q46ygnPVTiNuwQAJkiBFyu9T5UriSPzBT+NFo9FQCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgmPkLReDH//yv/50UfCT7P//v/2YoKWf5Rbs/ojpltLtGvPsj7sHrbnbvuW2g/AYHfKft7p02aMlHY8tgr7pbP9TPI4w1+3xF09gbCAf8850bS1GjMa/xZ7Ai485//uQ/gw9gPWOx+yEjeVLjGpPdz3UP3nW2+7kNfE0qu4cDvlNWs+58BtBzIcjofs+7n/Un7zehRG7Cdm0k/m+2K9tblNLBBMmAJ19nYrypPdbs6jSFWDm+2UXCDaWUKPFgIAYYec8NNyoywuknU8exqu8VOevJu0YNXHPQgfprajBdsBC1itPdZ8bw6nhNtmJhy848+lyEkmu1fkZcL0nAsv8w1rCQof5CouV513fWECv9m2GMePaWHKijajU9EeKFGtQ9jDH4pCzlbN8hkp52fWX4mfuIWBrQAuRvIUwGaEadFiiXqv3laz3WXLF4IcHyqHrsqfz6CRqMFiiTkl+95colY3BtGIQVCQwyoh7X2eYII9mgMr7mCmvJTp6V4a3qKE0Yg1Qddgls00DfnBQIFekBIO/L8JMNdg+e5QO6N+ZcdsxWjfhnsXs+Ei53fRP/X4+0sZBxu9r9XHgo2hULmbl6d9EpFio6RmCq9uMFtIjJCq5P64enu+f5z+OxYx6MrkVjStH1P9SV5h8us0MaBL1WTO3gp+M5g0BtgWIMuN39I2bYTc7YUn7HHzwzC00Z8ZXQ0u0n6xNNz4DhzQ0vvq9VtzcBRDzeTXbPS31p3pc+9fXIGose8Cc5H1tzhelB7p4//92YuSfcmTdq36ui//2dr3WVc6/57pmu2OiXGVTfVDB7W6gxrWAK3gZsKo8bx0ymives6gBObab1mCNXMCQvESSqvruZ2vZdG+/GMWNln/WCy/+z8LPnYggipXz/2/I4ZPLdGLdCkPAkoBei5a8jaSw+IoUawYwbxJN6X5qZqfddCNKDMucZrLncM+VraM/Ka4EXQH/uKue57gpmmb0XLbs6ojKkmfFfDd4j4fprIh6J6mnc9Q69K4MbVW25iJYfpy0+Z5UlDqqDk8+yO6hGXfoyhPe2Vv3QmLGoKSDIpj/yBGFb4r4Ji/eQ8Uo0+Z51NQzhS88bS8Qd+tUiVMyKpwFsaVG/Z0J8pIaS/ckN4lZck35eWMBo74vNqN7zz7xghrRmUZQHPfNy964vHvlePrPnJeXyboJxHwz77hlvWFCXIWPR3ubkokosRqQ+VwzHmusGdG/cWfA4UMUeb9lOfaMJAu3WKSPAKdaEvKwUYqB+pxNYqTBeMupbL7waAM9KwAYzYVXrmkXPlZFXwPB4TOSMmRVqyg1QG/CMG2NaslGmaj9Kf6jcwbjDHG/AxqGcO62AD+VZEff6N7B3ZcOGoU/9Y6n8l8VazbdR02NAM9BPFWhrEXr0cxlAuMGzUs2bsqzh0WjEdhekAKjUz2jS06Ux5ksfOysPfEvLgLQSf6fOfOdQj4/GbG3B3o0nw5uhBUpZ9ZwYjXmRM6ONLe+hBdSsjwq4A4Q2wI89LIO7Ep9dtfxsFzW+m/CA/SmhwYMExu5nrJoJegbuseeKJ7NVhMqWB/9xEwKAPDO8jDtUYQKnEx5jOuPJ/NLTxpIYjWAjBpVMiJBYfXSj6t9L3rYPe87GMx4M0xKDoqtx3/M9txahUjTzfBNZJNw+s/F28KPj4qeNQc3XYLWaWZk9onXb6wRN/I0ZiqC1drvMmXT6CJVhGzGH7CkbBpqA0BjzwEteB+drTxqKjjcZOQp0xl6RBf9dB8le87/17p1RgadDqfcdQD/1IOXrKhUuWv1TlB33mmdHOsB2yw0t5r8nJRTw9FgyFQZg0/HrtVkOg46920Wga9x89kZOM/Rdv98qZKJteux5UtWXfbRQ2bTYLt68OLtn/1FDYEmueGybHjK4/WsPGsuAxUdcYLzmPODrQNlEvaefPs9pbDqL7GPd9Vt272UOEZOweBkZxmUkRFTKHWPD75N43lorYAq6wmwr8JbMHu8+8Xnuny325ViF2XpJS8EDZH3+Y78SFAOEisVu3bKYXQa43Ij73fBQ9vBLxxvLRP1e9pFCZc3eBxkQOFHve9RJEDwb3ouBpYPToE7bIE9pgG8y0IzXmVcc+f1N/V7mWVkGEy1kEhZgf+dcNlMf16yveMfQZ59pZV0VPkdeVkVcdvRaEOYgtFAhDn6mFS89hUpJQGXxdKjx5UuHG8uNRRHq8w3o92ZwKYkS2rFx7zBkWxY4WqDcHirSmbeqaeEyVfaYiJHKX5ufOjoS/e6FPVKfksD1euyz96yl/hypsLEmSEP/mx8ogk4Klc4kWWPBEmq338EEy5eONpalsgeYUmwHrcHFFmNLhfiq9hO+6f+fskgJtmUsVL4T9rgMWWitxH9Fyr0WPVP52UpjblA44Oxz0yWhNVJhYysi9rwCEJq6QiXlfEddmsDNVLjdYwcRLJ0TKwX5IcydM7fKvVPjTaTsKumEBcG24vPQOl1iGfiTwI1pw1vPTlR+JHfqmFlujcYYcYNKFPis/OrQszSxbHOOKgYNjD91J3nTjr7eVIXzpOp8M59TrHgksrrmAl+r9zTFtkGbglNP624V4y1b2lvTyvYtjm/R++VtQuzRMUOl78QWcfeEGSg4cL8eqLBpwTUjbNsHAdvplaq/VDnvarJOvUsocP9rbVvzlw41FJ+Mm1rN/WBRYmZ+TVmk3ASKWB4csGHpTJ1Tte9NosZB27A3hlDJ2/G0xJIQOCBNBsMidgWEEtR1B14dF9lZOI4m5DNetZU47ktHGkqZ1OA0kyIPi0zi9nZIIQ3uPqq2qHAd/58cqHGt1O+lobVhoLX4uGXxMjHEi6mgEcMCDtG3mz7PB7uCQIg2+hDgUnc9SXMwV2F3kS3b8HB+6UBDKSNUbJCH4dT3bBO+32WBwtZrcZ0Y3DmVsiv9/i+1vzOKRMoZC5iV+H0EwQIOwEQ1m7QsRpsGNblW9bMqK9Vxr4ocT1TYA18j1UL8ykHFCsdSTEzhofxPkVzxNuQshDBidSh3E0Uda2S3XD6Z0dGkUKFnfuSfxNaokIcFtEiR5+O2hXsA4LL5ifqYBqMKqz4lj+SxJAt4yaTp5aAvB2wktmjigVC4einDVaBTDkT1vV+RUNGuwIj/PepoI9OCztyWuuI/Fyz0nhyzBZ0RGIA2BoK8GSu12bsAt0LcCqhKqADR+x6++zzw9RqdCB9ErIikOzbO1fvZOvR3c2947qFQvNX4poxQYR7U/rJPZ13LvCxk5mWZcJkNLc9+a3w2McsIgAYoOgfonr2idfPBRF2dXIBOi+lJIDufdSUBXEnWKmzsCo3rV0097KE8K+YuHmUMunp3y8h4eS1UUkfje8veqoRb2Gc7GouZpG8tjT1LUoRcq4/brLX36YcxKFwjBwtocCCIC/qdNPAhvCsXKHVQcsIcyqvSR6GiY1dWgS972ZR35esBGsmNhzCwGbncQ6FYJS8tv1sUPI9LzHy3iaGmznpgoZXwfWPxziQy1q77kmDZfddWZvTdsXo/a2hgmcHS4YcnPT6oD3SXScH/3xkzvLoBepTzIUJbBp5cqXAxiY89Lof7wN4Q7V25Cf2grXpWeEC+NoyUbd3sUu2754qEyo1FqCxzDGDEWWmvcsTMyFERQdU9PcPuhxLPvfCzTFhcJPwMVF501s8rvadNtVo8LNqjQuX4IDrTwPI+SwVAeIo8HStjhhciFfgExQ4Ctc+j96xw36MxNQvtXWniWdteBlpaBME/7AHYCgFjnotjFSo82LvOEcozXG9nG6iWstI6hMpICBTtSclrNDG/5yuLrCLBsmSRsrWUT2bMSLHeD0K37TjnI2uLByREgCKWgoBP+5yoMFuVic0RePNCBwc3cm7XlxYbyI2yBzNNeDAlwWJLVjN1CRUWHJMedpYFezzMDuOz//1trXV3DdtBUpSHZSM+d22IPr00ZO6ywnZm0ObM6t4itkME+w2QcwW0LGrTIyiPdcfL+I1WYlY42O6ywNPxwJ4BKT5uc8730Vt022ws25x3TPgdp3lKu2Bn0kA0niJvB92PvCx/vE50X/q3+n2eUWSIIbqmPLWahM3SEDYz2DEQoK8nOR/JWJi4jGbdyceF6tZp06Bf7bMsP/peJjR+7Mplq8KGOVCYRRzynKS2AmyvPQrC3PaU8rHWrgLu2smWCQsM52FR7B4vMsYDFmCZKnZV6qy0pmAh74ncGj4Xhjx11AXFztw3FUAMPg2lvSqCuwBiZQLRDWq0z7Ici71MVfh8RXS9YFl9Gxcr7HEoa4D0coXKGfTJEzOmWRovMVEjPOHBWm9hnuk0/LRsQoJi9++/xHX+Vb/XHIfid+SV0HlM5HKT9nq4tk7rRjvZfUcby4H+LF/HFsy6spTPhH/vE6Wts9IOtUeH7rn791y9x6roP8dcThtlj9eh3w1hz0BNsZDHqmCG5yPSc/sD2Ycc702XZ/2RcuT96GkeD+/303a/hclS0AH5iCZ3zw2IlfNeiRVlD34twrmUIjLfrlioxHyPufhO4lK9xvbjNYuLRBgDEhq0pfdGn97MSyuLAkOcib8/6Gcg99ruGt+4IUSORjKxCJBfJcpL77KaiU5EO4fOjLI4V+87jaSi1v9OjLIAoMxgNFH5HtS1h1v4vqLNMI3kuuNlFXO/O2NxlhR8Xvfhe89y7MI7DtjunSnPpRd+z4x/yDamoewRl3kc8BWzI+q+TYiuJOTFvjTcWM2Bccwz93mBQVvnKPMH9rzMhDfAnLGd5zQmaUz1lt4LMciveQC/1sF6nDF2mqcSWQBtLZU0N57JZJnjXSrDleXky6m4zsAhtu6U+6whAMpQmLHW4xqrEN6dLgaMc3btBXtvX7nvT0oY9QHbO4pVa+Wk24rveCPSMVxXGLS0eHtLckkecH7fuoNfaM/B0YiVpiaoIROPNr0b6NowQrQE8SQqOTUGZWe8B6PPuxmzxyPhBrgyZhoJV0Dm6PBSmGzZuMXGIK/YwxKJz88KKlULlpSFzYk4DbpspUU1y1u//13Osw75PvIzCTLbgoqz6Lx2k/kszQRKv9/EwFTLYPMyNA3gV4Fm9xMWA+cdEilLfsdQpxhLWzhh4fJUwz6d9cAbAe9K22LFYry2PChqgTDmwpGD8ixn+WfJQmMmlnGWhvdCKrnUUwRoA3ppGMxb9Z7bxOd9daZYEk5DFjZZDfHxPYSBpuUgYwagBeEdl58tTw1OsQVlqRNYW+ezVZ+nTZHypJo5zqMoBqSt97xh4TRp4XYJi5aHCt6z0HXw68j6cNbANb+HulCTnhXTWFzxwPhD/L8MIN3kHE6oU+KnImBWz1CsXpWcgjfVtV4KMl3HOufLlWfSNH3fUFvZzHtqj03e8lDkmHVMLR6YpZj9mJ1+1EUXM+isVyXy8GSsSlxyFeCxBodqw5ysctGgSOlKvVMZ66WetpfdRixaBp7PGjfwjMd2tEMT27CD9cEvTXVWh8rW+TyoIz8b/zdzXGuk3nOqjMX1r02vCqPdoj99nlUsBe09M3t49DP5JE07KxBJVQxwxu93SkG67LGhYN2TnOsllndM1bunKfJsQPCugDIDR93AWmX0vRABsq23YbET8apif19xn6cfmph1cqmBg6nlLskyA7x8xzr1PCghWJrwQB3bMlATnpVg5d7UbqCJpRAyfnA9WMqlB2vEt9j5Q4zFEpFW8nteFWNrXOo7mKv3ZFSXSgTRkqdnd80L/s5S5WynLqoUPnBw62nE3pbMeAnHdi16Z7res/I/22duvPvGMTNIRB0iXwXwoWiptMqyzqOqH3cyarMN2w5T9YRs1TznNPlEVQtUbeo9b1T5QPyM33HlmNwW7bZ08SF1Q4ti5djIGmovQZLDNbUMdGF4FKbsSRk61Ojc0YCX3BhvRb6SgRjw73OESFbg+TENIxFblny0sRsVnHcwKOoUnOTulMtkm+OBOXEJFeN6K4sx/u74bGoIuIzLTy933an900MbOd8BHBc8kMZ5wrtKzhNu23Xd7HFb517xsk8VoTJjj2maUxYp54KadaC+lxWEComUE9cyv9htWTXR58Cj7L+jt3pNkpsgDnGRLw005oEYsPWA+MQN/MnSIDNHR33g62yMTLaLHG/MmeF98FLZxrkkl8b/bYS3ZZGzDh6Zz+DomPQ+U7GcM+QfWur5i//Pu9FwDE9qeQ4bd8ascynqKVYfE8Wdo/+CEhMTl/iuSoiloMbbMAuVsss++iT525J9/WCZuwuOCnG946nPxEsI1KrvV3QgaxMxNUcVs9L1BHdNeFYujNl7YjSYyMOrsuTv7W1l5saYuL4n/i8teMYoxzAmljVQ7X3wiffwDk4lQcWzprRmQ7k3ytx1v7Vy555ZON4FBxwC1+AVeQxed4HadVUabcPsfawSnzKuktui5oBeV5BNSn5tWNau8ftVFal5sYXBl4FwNIk3SVfFSmI0EOm1SC3KdG3p/LpTzIwG4fSqGPEqWcEz2hquXAIxvSs+pyEry3P6GgKdLIqCxf7jn3/53zce4keWYVFg8b3xvYsCIzRCXwMOigavtM5aNffxrOYzRk21YSOmrgyzOkm4HMu/TQqVKoJsVmMwn1b0WkQ5z4lJV8/5ErhRx4YQ0HEnb8scPOA/yMFSLnnw95fi/1bi/26EV2NeMKgWDdj/OLwO+lnMJHHaBevb+Ub8vD5lRp/TuwcSo+zo37R8pjNWRg7jtS3xbCujzMwBZ2Nc6wzdBDgImVvFR4hXJfhx9SKbdun3KbP0kyNYblULRwpUFGSbOu9YczfYJbzBtci6+mChPSuJw4vxwj9Pyp7u3hQcmdpf/omFYXSdFSEH1aJZS+xhGG2zxlkJxX/tSlzEeRiuOCW1b44Cep6nnI649Xl3nummRuNccXmf8gBzB88KKBjERqo4sHYV4FZ3Aa6RNJBzpWqW1pAekaoeiKYF2eyA9f7Bk4aM3BArNs6NwTMtMGZrx0xtbASZygH93kMoFRV47NFBPij0gtgS2++p08jlnAVntKTTnhcVjJ3cCWXrpL5nPDwawu4Hl/GLes9p8+e6vomXwKeiycBaU1yHiA2YBBzEE1UtTmUV8gBCtpF3DdZxFUG2CXHOjHHWWmnvCrrn8dGkZ2XMwmLs4cWQJ2LOpSBgw6ANTebYpx/LTuVhEOKcDpK5FHoBaUG5XKuPSz3bEEpWxOv4uk7XFs9JbDyXq14BvCqxR98IOYiGWE4KuRRU9bDPec/quIogC1nvVUXqAEtBECtFjTsSjaxorfPZ4oVILdvcFh6dPSnbwHO8BeuKRqmKQU0riJW9GB8+dmBR5hmM2areobXidx9bDDviVkAZL0Ua0oOgwnhp4hDLAZaT5Mt4HLIe1fGy4vdCxtHU8ahh+Rpixa1mLYPqKQ/GtuDUtWVAHBuGYSKum+WsgcvlJ1+DEHmIDm8Dx16ZtGSZ/ajagXkr4avaz/xYZjaRWkRZpuyZJLEMBCRtBNbKvhUq/X4I70pVr8p9XyrX4wRtp1ApkyPKgzoHBX5voZximIL+ixXtVaEYiAceRKWIyCyN+s7YGWTm/shzoSYVBMAgR3RkFY3TPFCH2jhmFRTnk7I35coQhmU9IM+W2bLr+Hp0SiAnEHmiOFRgrcljgGvUyrnCg1NS8etpj6q5aszHc+DnyGp8t40JFuxii20/pFg5y6lQMnCjvIe3BGVdCaOY5ZzIPDCMp6/rMPfgNSmESiR5o3e4LdmhNo5Oauuoej2YymLG4uhElGeZzlPKxYqIeuDpnWhkUA6Ufr9uzpXLGs/fiwRinon+gtiUhsUK7NWREfIgwzID5Q+PGcy1ZZD2aZS+DTzPC3FveC7oWXyzRuoDAweeZWbLCWMzqFsthNgDdSvKSx/65l0HtH7OBytGDdQvOEI8PQsJe1+yBh5hE2AQOlfVY2CqCp20R9VcVaioELuAGhK65I1GBz4cQZYGDyVWihT40njRla/oCDGDoWvsGncm3omSxM181mPpM3QCqPI/Pp1mqmsPQ+g8M4hPhz6vICjKGH+IFeCzJBqp6sGZbTCqcgose3Cr9oGsR3VcNa5n24D3tda5TvQ8DQuopGdC1IfOHksQRKxUCDTK8hqYMYDeFYiEUQkRZDa0PEhASO8K/f3Gs3K0YFl6iJABl8cmp6FMi06u3f3/uOGZ6j8Yqz8vvDxwLDss6D3KZlitMxD/7FEdVx2sIp6gdXl2j+3MfvUYutyDECpmpZRYKZjVmF6V2wJhU3kGUxBsZ0bvX5Z8xy0LCJ+styN+9q3lfYYNBSwSv5qqY9AJzjzaqe/McHRExv6yibIsmBT0geSI+0ITdfBdgdbK/csBHj7LEQ83xqBY5FUxO1fZrcCDHCNu7gqKeC2+FHxGBgXBzgtEixwM9MGJpw27MXFqKGhygO8qcYWszHXc49uelMsx51PKGrjmUXlqGtqKHWyMCRWzEtdtNOzluDQ6+G3JzrUJ3NjMpSBas19VECz0LpRu/5ZFyTkbP1luKT//c9GST0DKGNFjnnWBfCM2UMeXa4dszbTE5+NPUNXHVMfm4a5NLMUdm01soo3/CHWhrx16yYUhHnwSDCU11XNRinpzV9DbjKxqwBC/z0oFOjcFgJZmPcd41srIV6wECBztiwdzcCRtmn7MDRGpqp7QL9cb0bPMxHUm71VIuyZWQnCv9uNENgWNhAp2aIiBvO/MLJWRFYiLDQfK1hFEXeaY3gVUm30qj3428bjOWrUbSFp34Hlb1m0wHsycpBz7YDXs6tblhgXj4IjsaGixmoUUcl+70mjKNnQ2AGmJz1f1hqTqSOFcKxiy80mO+N18DMnE4zPDtpOe7dotBTfW3Z3km3MlOfZGfuxJH3mH5qaBAflMhT0P6ZCE3vEZdOw8hFj5ZekoNz2s2LMePnd6zOILlJ4p+XhCipaAVgfKznofQKy8pd/vkecD1B88Q4uVYxJ5ceDrBT1+oRPLQJaTlvswE7np43N/IpBXofj9i5ZaEw8DdpAD+igIvWQGZhcTVT7nCugnZgxikAnBEQne0MIrqMfpEFuXz9BnOiO44iN+PWzLLiYr+P8ir0p2YE9dV05ixqy6B1jSUYSi98kSK2zlL+yboQXcF/RRGChQ2JGTY3zmvOUbFrJFRviuAzPlEDPjAVr5p7EFTcSXHMMEfNDBvtmIWMm6WgPkotMeBPl306C36WUg40j35p+ohXt8RlESsk32cTmpqM7Tgv+fHMjwl5kpp4Hq+aLh/o5JQXdoQmAfwzEUIQVX1kSusEOIlbYNP21xfNkZDFqr/Hf387r7+8Puh/7+tPuT/v3En2ns2Vg00H3/o3up3+do0M+/dP8Qs3cWY5R87tW4B73jv5YMvGXeN+1Z5wu5jbaPM++iVOBFwW9FA/i6I/klQhjFScPP2AexUtdln/ShU3CbDT2QVspu3jFC1l8jcWyHWAZq2/BPeFBeGEo4EoYk4X8HV8gsIB5YNIxyGspTnd1FLMZeWZzFDpGYHcEg7EvImJU+unkHVcuHDW/RAPt4RDNl6qMj9bmp21/+7tG7NuFd6W3sU80TxW2it5GA9YMsA7XlFmVvRWTxDGRG4WZNzID4/q8lRNA1e1+iMmXJniEzA7DP7Onvpuq4A4R83j6KuqRghrmuYXi3bSRTKzFTDiFM8945rXntWB0/vekjvHyYhu5vPV7uCynU75raGfUlUOVnHe+85LKmTLSUxfbtgED1O/vtXPwZbAbNAkJ7U2xZc9esPlNHw3nyCfpjb8qLY2DK+Pr6Z2MJqCxjYH72qfcFzv0R9SkI02NJcV0wkaj8/QMRwu08anAZuA+D2KdYBhLMG7jmteonFwHbUGNpAELmWSmTHXCg2omB0M8Ts2tbLwWdswHRhyemVWcHFpf5ueM6+ryK1DI4LAx1S9+nGJoVK9WNZTBxLfd8+E6g2VDWw06YBjSiI9Wf7dDnBf+ft4Tjcw7QXcfed6X2l3nr1PHKNhOvmen5e9cbDB8tUlckj1o8hLW2d4Xt6yTgZSe7a877dFZQ4CWguybzzYQUK9sOdt5IDMpLxyAtY1WqzKxiD0V9u6vEmaPTUMMes5fENLgT7gC+YnHmm/eCRU+Z9+2jWHkOKFZIANz05L3reEaKjHd2oIy1eQMPpVJfq/ru7EvlTr9fJ1V73JN2k9V81r6lnp+p/fjFUN6VaY/KINQhpVnTSVJDBtiWSa2bHKBS1obh2VYQWVUE3NglVAyDe8uNvMrzkJo/lUKFl6KSnOWLUoa3p2n6QxrOQR/WpPkZ8+rWmayJvYRFhvuuo6/+2HAd12n/fVlCrCtCJ30yDtwPQguLSV/yMvGyZ6h4lcYF2pcDNfS4yW3COYU55wFsyP8mAzRuYDaw5XudaLcoi4clb5X+T/z8y7+POWhxWMIw0udOtaIV93jboq1+x8y88H0iyyzomL0qTWSsvOzBaxcNGPc132/d0bpeBZp4XAaYjNkGhj4MYHXPcundFl62z6vAl1305PWvVBiv0m0bk9lDiRWl2kmkI0+RpIH7mu9LQakUAJvw7xNDbZZBCwz9Q+LhGwkIdk9HvCX5lQcSc+YW8e9f+cj6DQcD048Owt2KMqZ/z1gI/Tntlu/xot63au+JDctsuozx7KNXpYnBdXIAkV2WvGA5Z7Im9sAVeQDWHV+PD1HXo4b6wPkn6SuXPbQRMxU2Hm3Q9UNu2Y6FqKuNz8pBCILFrJARK3mw2FkDivaDB0c2IMfvlfHMcZmGy8Y7yxkAlsrfDUxekbPdNae+2+vYbb0sEB9ry3fKuKZ/9FishDy8LOJrddIQeeRHuas5yNz3oK7rzuxjW6AoTzxWNa4/4kGxy14GsuGZqhe3MuBJ16ovBoLrdsyTvVCTEUpDse5afJd8vgDv+hbm0NYDh04Kl5bsvE0Z7YQzxQ5Eoc6Fh2IlBMbGeO4lf7eWat39LLjxDywVrIXIxjF7f/GJjyjYupzyO99aBplRg/XaNUO0Cfz8lx32rlwXGJZVziyrqE1su77TI2D6/fMGxFrck+3vIQTpddt9pG7Z8qRzqMLGMD510VZwWYWYwI3b9LR+DXy9xxIDYdTCVrdIiBO6z3f+3Q/Di3IvPCCDkhWfsFhI+c/vjjKgSp2bMw7+/rUhOPTWZZoJr2SDEAOLbevylmfPtwVbyMq4pLcdnh34Mlfhgrojbivjjhmgm4IZ8SynTUw8Zll9mSmvAxhimjB8KC/e7lpnVxB5r7q+U2Sl6ucLifkas5bafsLCgOp+WnX7LG/fpn79FNBW0HMNm9zSW4FlgGtM2950cUjPStlBsw5X6j3dPTXsBRvohP/vpYYB0mJDxsTYDOipzTVKFc4xKitLQ6fr6XN9nvjMn3+5sZkD04bvcZPXMTyTfpnP3msayFg5Yq9Wl2ZKeQPMpsAtfwxLQJpQu5VGOcK3jgiKO1RW5w4PQwhhetVGsC23/QdRZ091yphtRdVdmTYGqkMBtzypqevhmx5imS+oWKmQ+nrUopvsEO64Lc9ox0XKmuJUcmZdEQsMVye85a3LmY/BLPkOz+o4CD3LW3Rh5wP3n2XVd+dZaZFx3/TFuxYw/f6l4/rrmsK3SztFmhBkZh8ZNNj2B+pjlvABTz7rtCEaiEMuCZFIXXbAVoxUfa/Z9FDxSE0cZJh6/P9WDMJtHyBG9z9lA96ka27Fno5b2bn4VOQFe0roHKArPRPgRkDPlpV4l2HJaOyLkl6T3ntWuGxpAAudCnp5SMHCQuWpYKZUtK3QJ9X2fc+qO8Tz5uVcqSN8R6EOTeTBus6Ojtg2iAb0ruhlkEEDbX+i7MeZBLFZbC+GKlzqgwnb/OhAtmKg6i//TA8ZOP2lBUNhznRmRmNq+zwFHYOxDuRt0Sp8yn+SePiLd/RkWtHyEs4Lv+8Ve0pGPNN6ZQET8dblE77e2tJZ9KA75K3LqezALICe+Ce2KOtYeH2mom62lhnpumNrrXWZq/Ap85eHWBLiui0SKrnbCvkaE8823idCCezLnIFsXrPNxDXrP8kZrEvP+i2DaKjJnBYso4Btf8EDr+3dtyqQF5Xr+VSFW0JOmhJvHkKlTlvZHlqoEH81VDgyBoQM5ikreDKM37jQXsVXhiGDdURHdvGNn2WR01D/KrjHTVF6YeGi9+2o1DlKR1izIViofXe+joWRn5M5Zd6OAODfRSy0Rob6DtZA9b2LyrUHHTdvgJy2Ie64vpcF70DPkbs0yIdtFrXNFS9R9grPd/Mx0ic5GX/3cjSVZMN2b1vh3a5U+OWkLbfhR7YdW25nDwHvQZOsedU+wnZ9USDQZ9KbHVggXQUs63kTz+nwQC1q2LuMx6SDLwN/aei60rtC7tQBG7yUByzT29K2d4Ua+3nDjeSKBdmo5HO9+Ga75Iy1T2xQzJna1NLRE0sdRWKQvTQ8UH2bUfvOlkJvUVRczy8hZ5AF9V0kVIYFQiXxbJt3Pa3qEOn3o4IBaqyqLxMMys6yOSXCg2om7kUnp6Tr/8tZsCMVdun0zSbyUnhU4r0TbvdFnsR1UwKAPZSh7Aa9uw4FSBqyFVGBB8p3AnbalXi1rw1dd2V0KL1lb8rCRCt43fCoMSZVvCv6QL6SBVp2ezJV9sD2fNzYBiy+6FnOlPtwrBW/tzZwMZdNYjRkasRz5diCzM9zxd+NLAPVnWWgkoIw42169NyP/PfEKJejEypSsNB2wgY8LFSftAyX8swpDWR4qG4ulN+SjRYqm4I+4zNj7vO29SzQdSivjrUfimRiVduRFiyF6QZ48nOt2tsoQPeJ2fs6UGG3/tN7XPNW42e2nVvulxGXSyRsaezpqZo2bDdo6/qJet9NWpeEx7412+xQ9mKi7KktOuf5ObhYsWR7pHXRO26MP7hBpsYASg3gtMLtllzhZZYsynb4J/YQ2VyMiYdnaMPei43l92uHW/+aDaXu0JmnGPqQH8LiVdGGnAbAuSj/Y5hRlxUsDyr8qbjaCOkcPusKS3sDrufzEuKa7jEuECqRh2dGGq2+EgW8jjNnSADhGzn6uuZc+eXBaZKxh1ejCiMlvHuep8u72mkrS7D68MPds+rcXHGocuDswWR307KTBBF/dlHzmVIuy6xrHfprg9eeG+qTZhCnPKBOuEPK9PxV0zTrQZjcammgQt6KRnAjOmkVg1G4TkvbIbmhmgOnds36qPg8sbZ0NO5fLCzNIwG6fgZMSMFyqsrFFZWdOQ+4bWYsTn8Io6DrWJf9P1z/VWaxhTEzLFofSrTjuKrHswOEXOalHXs/XP0rkPAt09fb4m8x+Rw22E/qUCjQm/Ky7P44CeDF2OtvetLIR9ds1HvqiNTyWfr5zvYjDlCO0y739a8NVmbG7vBEdMYXVo7/sAK8Y0+BFBxVd6DoGUqIhD4bMaBX3RqYKstSAM+Y5WBBSzKZGDgfSg5WLq+NFFuyIZ9yPVCnuHcECR61V8UyUxo7gpRDoo2LNvah4rT0rHJdMOu6rjgQPtgyKXcZFmWhB329g8e1JFS1/9YdYDYNCYjU0U9uVPsxhnnPOD7kjkUSsOwRm/BYEcp+6NxaSWB7YWtD8z7EJ35t+Pq2NOdSnMzY0/IqKqhOKnNabrrntcUyhypaxYryWyNeqfdU+1oNb2QHKogxUSzqtOtt6KnW6T53eY3MIrbmbFSVcq8Fpz2dSdc1OmRw1oFnSk3iPFqB4xu+8ztIz01Vo6ljDGwzPGqHj221GW7TI/F+tudtamuoXq7Z5M3yua83PaCn4l51xMpGvXv8PtguSz+5YXu1aLCcvdp+0W7Mlic85EG/Zftx0aJgrUrQOJk2+KsF42LO3E+EKHnkxr80ZkJj3zODOH9JbAy2Q8s1TRF1ltOgdNS3mQlxrjuIz9Zl/pzPNlPrDFnELZhGauMzmzDKfivK/pXvtbJs8Rw20YC7snW55Oz8Qrnjgw4FDYj3yh183cS2Vh9O2vC8iF0qXWXIk6WY6yG012Mv+LGCpyNjG/Jni3KNujiEsF/x+2cdtx96ojhS3Zn4VI6h+wyeFZt35Zq2MVNALA/iN+pjfMuS40+2np1PNoaEDfadquYKTtnYPOV4XHwbaxlj9Rb4KAOFeWlnU7Gz3Bjlfsdrz1dCqCTG831Kr4pjtpSyUZ+y4NTi9hCzyT8DjIeIP9RAHqtwO3C6+H5l28+bl6XkTq6mBmp94vZ9yNgOtlMr7h8Xqrl4Fv38d30ZZPk5aeVgJiadZy17XLZsN57VEcQhfm2h0lLLziC9VEMVeUWzBEt8ywN7OHzUotkA9PZoLYjKVO7UMtDLQeODKDFORc4zTrrx6CBL2wnNS77mTdUyFyc57xk6Xo76h71ZkWUGPlXA1obX3J6U2FpJZawDYgeBB9GU29oPVWFnAOie6CVbp953dyUl2kum3l32WYV2dN90PIJYQtVxFmeij9TpA8/HMIEyJ50iTYReygwhYDL1HsP0tqR3bHbja0v3mat9d/oDH5udcsKfmBumNPr0+4XHuTf0vSubl0K9L+f4BE6mPFi7TrB15Zwg8XXtWQa2+AJblluKDzhTObk62AX7QdSIralSIEUc8LxQ71swzTXn28+wAyiA4dGCM7UJV6OdJSWMjFKey3sdpa3nzlS344m2Oe1mxT+yrbiE7ptg9eiTroG89UGe3/GPsDfesyiWSPeD7NjtkOsUeCNBXFIwQdftLPssdru1+AHL2qo+kXjF8SXUoGnpxkySNi0IIqVO8G9OpQ5F6mit+O+FqiUVuubA07z4kr204zpmxWPNOFMeW8JyYg023LB/8b/1O6zNNOiWg+22LNie1H5CuqVRxrlpxQPVf69iVgAAAHxCscID1otFXWtVGPPASoPzqyEYTgsSXeUF0xaKBbFbJ090mIcG+oiVUmdhlAjGtZ7XYimHGS+x6fLMxCxH4h3QDLECAACgbb62fD8aYF+MGf0pD6A00F7w0hB9Ti5lPPGykUuwzHPESszf37BnIeVBW7sl8zLCavJcqilfQ77Th4AmseXyTNyL/v9ZBNSu+TlNz0cVoZKyUEm4DLRwMT+3blqoAAAAAL3xrGiPhOGJoMFyLJYwprwkY255zj3zpMC7YhM3ZSKzh5bkbr5bl2NVnJArU0YWRhGoG4vnnNvu6Xj3E45TeVDv+VXMU1QbX/6BZwUAAEDvxIocuMSv9Kxf71DRkfPmTh6nYOHvviq/KPsyYuXWFuTrI1ZYmF0q/8j/adnIfYdQ0blmaGlrw96qgfp4fsmwxWReECsAAAAq8eVA9x2r/aj5BZ8LtGWhcq3eo8Pl4K1PJP4gMvi7oY7w1myKdiOx52Tv3yQSOE7ElgGX3ilV9pwUSxYfVYWKjsZ/5t1CWyFUzDNh5sipAgAAAGLFgRAW5kCtPS4/1W8Py5bjM2yCZWK5rj4mPIRg2Si/PC+0dfk//aN+e3dsW6XpHWjJhX7Io0HZZE/Vxy1sdL0XFhgukRJxsLIpVOh5aXcTLR+R5yhj786T+pjl9wbNHwAAAMRKvmDRwkKSsAeAEie9nVjLCdKmSuzdz/NCcLDoUNXLpknCYhgoliPja304dpvKgISL+r0spQzhsXUIFSoXc1eVXB47U+/5G6h8TO8OfWaMpg8AAABixU+wkCi4tXg0aDD9xv+nBcnUIkC0FyK2CKFTiwjwERZjFhYhhAq932nRcgt7Oabi/kNboh+OQXlRH702Oih5wsKEvk/vf2cRQdMeJx4DAADwCelEsKMl9uJDMjeKHeHB2BbTsXe4l3HtiK+t01wrtR9gq+M8Hsts4RV5VujaF8Z/09bllbF1WT6D9nSs+bk3BfeyZbnV6GDaCZfTVNxvaZTR8FApmBFgCwAAoNdixUOwDFgQkMigbLW0dGIGjL4N3Ow5yHLuo70Sb0nSqnoZSp667Er3XyhWWHQsLO86FyKEfmJxIrQtG+7pIc+KgFgBAABQla9deRA+iVkJwUIC5ZUPAHs7yEsMwCRGKEBVppZX7LWgZSH67K1NiLR1jgKLIltyN69jusVhhOb39VLOWpwMfc9eHtd3pjgMDwAAAMRKM4JFL38seZDWg/uSA1NPLR6ZiAfsi93/zZs+cVQc1JXxn/RzJp6p1DHdBUnk/izlsMcl4d9Fji3P9H9jbFEGoB3MU9gBAEcoVhyCRaMPPXwbzHlwnvHn33YOGZ9/82zwichzFgpNBJZOWFxshKCirdcUJLzxNVz8DpcqP9PtWAiVCxYuKce0mIG3B41RAeATChXql5QzKlPhdhMCAFSHYlYsHf9GfTwgcKaDaIUHgpZUIh7oH5U9EZsevFe7n7suzXyE8EgcH1nzO9Jnpvx+P7THiEXO0hBrmTLS93fgPRGzAo5ZqGgPb6p+L8uuUCoAfAKxImcqhvhIWbRs+DMUTKp39pzwZ1w7ZzRecSMNvhc927nKP0DxzxIOG8KYn3vOQceuk6I3XZzVQayAIxcr1BdTeDIB+IRiRXgOHtTH3TQbFi4D4ZVYia27th0xLuHyqPJPVq77DjE/o88Jz3uCw9iCLN95YLnObdHxAH0WK3wooylCKcvxN9FWXiyiLxJ//7A0ZrmubgeJ56PNxU6s/3Lu74Lu92wRnpqMPzM3tsOP+DsD8bk1b/N/sjx/6mg38lnX7BlIC+rihu/94XBNDvR+KmjfdP1KXk5xIOdee3d4Y5Vsc5b6WRdMbPKuRd+7sLSdR5lGwWhf1snE7jP/qo/HYeg2pScm56Kut6IMU8Neyj5gPaXdUU/Ws8Jc5Z1TP5Xq31IGuX2twN7qjQZxXh+yPPeFYaP19/QYsTXuc8mfj416eeQ/FzabxWWQ5PRD3Y5WhiD2GdOGRvmPzbQcjmsNC+qtjC3xri9fDpoUztM46ARvZg6UAXfgezYg9Bka3J84yI2Mxa3HLQbcsJ84ZT7tJqJYl7fdNbZziPI6CX9nwt9/4g74yoJj4lG5mRAqN9x5dJK8ITf8xLiO9sLM1BFDp3Or/ey7t1qo6LbCbUGLkRP+/1MhGpZs/F3XnXFSPipraeSnfO1vSiQnpN/JzijuT/f7xveXz7ziehyq9zOyYv792DDo9N0T/gy1nT/HMLCxebB87oqfw/b8Q36eW8t7DbmPTbgvFJ1Rdcl/XljqKTXqQfHzfRPvfMXvM6nQFLQgmci65Ho4MQbqvyxiQ78/PYvuMzNRL1spbvlnJgYoveyjJ1Fjvu6Y29hCHpnB7Wsq7M3CUmayXk6FUNEHkOrz0k74547twF5diT6wtZWRga67Dbdjl0DVzzvx7KeV6t/SNmWd6PI78xCy+iiSe77nKT8L/e7V1uZ2v1twOY/4vt9EOWuxNhCfn/B9rvg++v2m6j17+MRls7h/ji1t9VTU7ZLHkIjL55bvsTepFT9yjPwmyn9pHt9iXGvN9x7o8ccocy3q9e/JVkUh6qsMX3sySL0NxmygzZgUMgxbVo4bPQuh33GlX1lU60y9L8PYxMtAGkUO+JViQirzpMIraeVsu/9b59jd84yF2I0wkkuLhylVBblljgw5I/2V9xldJhyUrGcyerCYOq67Mep67+8sIv9soyfjKGctXE8Dtb91Xj7zT2MmTH888LNmoq1t+ft0v7F6P1H8mo2cFgv34nNTHgASvkfmeJdflveiz9OS4z0bbRrklG1WLjIlE7G4n7OuRPukslqLGI8l32flOSFIRP+MuA+t5H1EGf50XOaX4fVKDU+Ibisb8V5UNmQzIh7YJsJTp9sbvVeq3o/DeNj9m4THljcHLIWAeLa88y8xQdMeFS2I1jzwaW74Xq66kjZyYk7c+Nojz/LWNifiA2dXZftqifqXbXNj9JU4b/ATXng96bgVfXosPG9LMWZooXJl8bzSv285YPqPd58F0VKIfVkea24/1Ab+KbBZe3ZB1D3ZqzXXrRakQ25HW8NGpJZ2G/HnHoX3Y6mvIcdVvtYP8Tz3xjX1e/7Qvxfv51Nf56EM/5c+jVLc+MzD/yI2Ck88cGx5gF853OozHmgecwRIHjE3iKSiUNGdx3bekZ6xbjnlf8remhserBJTdLlS84NcJhVn9HKWoTl3eBzuPNs0XWtlHhlhfCYThi0S7VD+qQ3dqmYfe3OVF5TThSHqLircRx6fsch7f8e9t47yL+255Vmuz2eHXP5XYkDcWiZWM1E3rqW9Rd5hpcyVqN+Zo65Woq6SAi+YRC51DArKO81p71XLvUr9rwrstB5YM1s2cx4XMuFtiLjMdH3e2WKOuI+mLMwjcZ/UJty4v94peyLQMisKM8P77zOpv1P2c+WsHj3j+yufJRseY0886ytYDFevxIpuCMLFvTU8HCRa/uX1+heH2/KMK1S6ue9FI94YhqFqYZsuuq3FED1arh8L8fXKIuXaMlie2jokKKyTrMRgkSceNsLom4OA15Z1bquJ7ZBLC6YrX75HIgeBALFXsl1dG8+sxfo8pwx8mYt3u/QoL310xp0QjKMSQicEF4ZX0yVAt8KrYRO61iVJh8jIa0+PHqIxtgiZMuV9b5R3FKgsveqfJ2z/se2f5nhVBsKeF000tGfpwhhc8551Y4i8+4KB+rnmWCfF2VVeuevQBRIblv6/DjRJ88Knvj6FWDEq8kR9PKwwUvuBVeZgRY3tb8Mgp8JrsWURkDlmNFNLox46PDgP7MojRWuedKxd0FOHEra9gw7OG8ObUomtqAftkatqeLWhitgtrA1mXGDE/uG4pit+ho1H508sg9NMvMcTi9tJoL61FQNxbIi6S565roX3KKp479SY+RV6xJQ4y8sQiG0xMERrnjDWZSPf7YcxY17mDL6Rx4QpNSY6rv+7NATnQNoxRz+4EuV9b9RDCIrqfyCychftbhx5TjCfjfJKfOqT43DWan8ZKiuYVN8EKKO1MSbsjXVsS0Yq38s/NTxKg6b6BtfXZRMX761YEe6oGxYtK8/OQQb2V46L7pnX6eaGiNGNc2tRzFvLfSLldrPqGf4ZG6uiJQP6LM2YT5GNtnabkZ6z2DVYlDQi58aAkNcWtfG9EMLANRu+4fV0vQ6/0t40Npxj0fYSZQTk1SRzeHUmYuDKWw7z9VC5DLHL07Dmfi+9F5ctNqEqht4M6L41PBVXBd/5WSAs98SK8DTdSe+X+P0l1+99wXtdOMr7IlBfLKr/C/W+q6dMKoZtif+LPb6jcgRh0/zKqaOYy+cy77l0zKf41UNA75itvhqZPPRarBgqduohWsgoUNDTd1GgqdEItuLfG/bCyNn0dYEx140qM65pBlnpLW9565FapJwgyVTQ9uIzWPgYWnMZZKSKMyXfc5zRqcVrYg5W59xmdRDo1HiGtXr3LmZStAQopp+W2f5EPxcvtT6Idt3ocowI9ExYkD0Zwm7Q4Sa3LZjtFi1J/lNSYMoB+M7iERmpfO+fDiKNebZslvegpfKeiSX/Mm2rykAc9dCUbcTOxXVLkzTf+oJY8RQt3wwDrowOO7IoQun1eBMQvBVYdsoVV3ha0Dj0GqweSIZG47gumEm+bRODSGmUvcFCVQuWlktB+hTwx5LPsMkxRHLLvnUbvfAunhqz6LrG97tlELxU73mJnvlH9oM6M6rUY9amvQH63itHHw4xA3cOEGJAjz3t0sZntmtMjDIfb45Rz1uHLfnjEREiZGW0vchR3o8By7tS/bM3eVaiLgeenhG53Olbn8+e92lEnOT837yoD4WYpHm2d5/6+txixTTgHLE8VsVuednoFmK2NhGNe8Uig2YYr8agFLMgmRuiiD57pj6eDu2aFVEFn3BMSqpA3uxRGcbdFItZURsxBovrCs9iDtTbMuKSo++3OjePa7ZiPiPvYlha3ucuoCH9k2iOtwPrAMY77lv6R8ZclRrAjNn5pmBAnljuPRP1PCkQXJIzl4jw4NGwHa7nTSxtpGi2eyUnXuLdBjkD6cjxbLJdrMU9yL6teWJnHeD5XqOC8q7t6vetfzHQKs5hlRT0xbx2eGZ859Hiecprh95Ln4GWWr57CrqNsXvUd5LW1BhcVF8QK5ZCWwtviw6O3XoYaaX285pMjMa8NP7+ZBnwYvUxgZuplEngnLIX5RaBs8XeM5WzC0UED6Ye19rUmQHws6QOg1mGa9fAyvdYSe8KDzITHdjrEHKVtwzyjCsWMzbtVXGJsbUYVAcl31vPcPPitiY55SuDfEfG5xJzwBBCoupk4FbYj0VOYKoyys9ntpsnVBc5HiftiVs5vA13hk0q8v5NxATNVdexpf1Vafc+9S/rbqEsS0LcT27Fs105vq+f+Vb0Ld1vLl0Cg6/3wjYj19vJn6ffv9ZZGuW+JJ/XxxM4UjkxXJZJWmPk1RfESrG3ZcVbO78JT0iqqrmDq1SAzoMxZQ/KKc9YcJ5IOWbCKP3Z/smG4cFioKXHpcxgEeV9l7l3/N23Q0948PyZ8zE54OkBkgzs0rJT520GxkbJ5/n3jAvPyvTAuOJkZtrIrz28DRce94lFCnqdLyjLMXg6sDYrmFFfivbxIWOxMJ5FIiLKaS86q62+/pMckMQRCG+zWEvf/rtgtrs30VLv6/8j2db5Xkv1Hnw6NT0++t460ZgWBoao0b//R5TRn8DaHHFY6FkoUf++SS31OXGZw8bPhAhdSMHC7/XE3091/YvB21WfA47XuRaDvFy+fZCCRXg2nvLataddeBIelbmnuLn28FJ5TdICeIZy66ssOFTu44x8wLPcSPmdfeASJfr8h5/85+YzHxmvDatnMiHfWcdCGGudvTFj45daPqc7/kwOItwpX1iADtmdqs/0iIXXYm0eacDfpSMVMtu7iSMTisTtSu1nT95ymxkK47UUzyJ3m6V8/Zj/PlbvUfl7z+/w9m349/J6d5yRdcLXim1lwO93bngkUzloivtnok/p5Ym8s1pGYma2ZRE2Nv7/0rjPRr3vgnG1j5l5VoooY/MEdHqXD6coi/NnJsagr716c9EGJ/ycA7Nejfb8woPJX5ZZ+rXxLrq+1kokp2MRoOt3w/W4Eu3nls+OivnfiWxvoh1l/JxF5f2nrTj6pnf9G8+eN9j+5eEZvBTvkYm6v7dtKRZCdiQGWN3HVrZ2avRtvYki5nKcsR0x+4eOk/lhsQupGHd0mc1127OcBZbn/ZPnx/1pB8bza8FoO99L19/AaB/yEGGv+lK/jx2pPfZ9VUC6ETPX7NFj3S3DEk6hNyQKWF9vOWfY6MZiJmvWQcazkrnxu73ZMqVF5465EV4S012+tc20+buuzrhWfksOuQce8oCzNgxVZhi7TBh+1/NHKt/lborqVH3c2eb7fq7Z4NbTm7hR+TsLNpa6leUw5EFIl9ms4L6paC/K1V6EvaBnmxq2wTYpSVVxDBWlWD9R9iUO+n5qvItyxLXdGfWbifaTSQ+Lo+xUlfL26HM+9X+nPDM/F5Tl27lwhm3IrXuuM12fezluXAMtD/A3xn3MccDVP7YFdsF2X99l68zSjmxteMxtN3N4jB8d1y5VX595kg4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4M//F2AAZgOjAEwaf6gAAAAASUVORK5CYII='


var doc;
var docPdf = {
    init: function () {
        doc = "";
        doc = new jsPDF();
    },
    template: function () {
        //PDF HEADER
        doc.addImage(imgData, 'JPEG', 60, 5, 80, 0)
        doc.setLineWidth(5)
        doc.setDrawColor(150, 20, 54)
        doc.line(0, 40, 250, 40)

        //PDF CLIENT DATA
        doc.setFontSize(15)
        doc.text("Datos del alumno", 75, 50)
        doc.setFontSize(10)
        doc.text("Nombres: ", 10, 58)
        doc.text("Telefono: ", 10, 65)
        doc.text("Matricula: ", 10, 72)

        //PDF CLIENT DATA
        doc.setFontSize(10)

        doc.text("Carrera: ", 120, 58)
        doc.text("Folio: ", 120, 72)
        doc.text("Correo: ", 120, 65)

        doc.line(0, 76, 250, 76)

        //PDF TICKET DATA
        doc.setFontSize(15)
        doc.text("Talleres", 90, 84)
        doc.setLineWidth(5)
        doc.setDrawColor(150, 20, 54)
        doc.line(0, 90, 250, 90)

        //PDF TICKET DATA HEADER
        //doc.setFontSize(12)
        //doc.text("Nombre", 10, 98)
        //doc.text("Instructor", 45, 98)
        //doc.text("Turno", 95, 98)
        //doc.text("Horario", 125, 98)
        doc.setLineWidth(0.5)
        doc.line(0, 101, 250, 101)
        //PDF FOOTER DATA

        doc.setLineWidth(5)
        doc.setDrawColor(150, 20, 54)
        doc.line(0, 270, 250, 270)
        doc.setFontSize(12)
        doc.text("Universidad Autónoma de Occidente", 75, 285)
    }
}


import std/[jsffi, jsfetch, jscore, asyncjs]
from std/sugar import `=>`

var module {.importc.}: JsObject

type BtcRate = object
  usd: float
  eur: float
  gbp: float

proc new(_:type BtcRate, usd, eur, gbp: float):BtcRate =
  return BtcRate(
    usd: usd,
    eur: eur,
    gbp: gbp,
  )

proc makeRequest*():Future[JsObject] {.async.} =
  var res = newJsObject()
  await fetch("https://api.coindesk.com/v1/bpi/currentprice.json".cstring)
    .then((response:Response)=> response.json())
    .then((json: JsObject) => (res = json))
  let btcRate = BtcRate.new(
    res["bpi"]["USD"]["rate_float"].to(float),
    res["bpi"]["EUR"]["rate_float"].to(float),
    res["bpi"]["GBP"]["rate_float"].to(float),
  )
  return btcRate.tojs()

module.exports.makeRequest = makeRequest
